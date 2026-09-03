# `arczonalshiftZonalAutoshiftConfiguration` Submodule <a name="`arczonalshiftZonalAutoshiftConfiguration` Submodule" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArczonalshiftZonalAutoshiftConfiguration <a name="ArczonalshiftZonalAutoshiftConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.NewArczonalshiftZonalAutoshiftConfiguration(scope Construct, id *string, config ArczonalshiftZonalAutoshiftConfigurationConfig) ArczonalshiftZonalAutoshiftConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig">ArczonalshiftZonalAutoshiftConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig">ArczonalshiftZonalAutoshiftConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration">PutPracticeRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetPracticeRunConfiguration">ResetPracticeRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetZonalAutoshiftStatus">ResetZonalAutoshiftStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPracticeRunConfiguration` <a name="PutPracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration"></a>

```go
func PutPracticeRunConfiguration(value ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putPracticeRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

---

##### `ResetPracticeRunConfiguration` <a name="ResetPracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetPracticeRunConfiguration"></a>

```go
func ResetPracticeRunConfiguration()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetResourceIdentifier"></a>

```go
func ResetResourceIdentifier()
```

##### `ResetZonalAutoshiftStatus` <a name="ResetZonalAutoshiftStatus" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetZonalAutoshiftStatus"></a>

```go
func ResetZonalAutoshiftStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArczonalshiftZonalAutoshiftConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArczonalshiftZonalAutoshiftConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ArczonalshiftZonalAutoshiftConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration">PracticeRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfigurationInput">PracticeRunConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput">ZonalAutoshiftStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus">ZonalAutoshiftStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PracticeRunConfiguration`<sup>Required</sup> <a name="PracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration"></a>

```go
func PracticeRunConfiguration() ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a>

---

##### `PracticeRunConfigurationInput`<sup>Optional</sup> <a name="PracticeRunConfigurationInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfigurationInput"></a>

```go
func PracticeRunConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifierInput"></a>

```go
func ResourceIdentifierInput() *string
```

- *Type:* *string

---

##### `ZonalAutoshiftStatusInput`<sup>Optional</sup> <a name="ZonalAutoshiftStatusInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput"></a>

```go
func ZonalAutoshiftStatusInput() *string
```

- *Type:* *string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `ZonalAutoshiftStatus`<sup>Required</sup> <a name="ZonalAutoshiftStatus" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus"></a>

```go
func ZonalAutoshiftStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArczonalshiftZonalAutoshiftConfigurationConfig <a name="ArczonalshiftZonalAutoshiftConfigurationConfig" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

&arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PracticeRunConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration,
	ResourceIdentifier: *string,
	ZonalAutoshiftStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.practiceRunConfiguration">PracticeRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus">ZonalAutoshiftStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PracticeRunConfiguration`<sup>Optional</sup> <a name="PracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.practiceRunConfiguration"></a>

```go
PracticeRunConfiguration ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#practice_run_configuration ArczonalshiftZonalAutoshiftConfiguration#practice_run_configuration}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceIdentifier"></a>

```go
ResourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_identifier ArczonalshiftZonalAutoshiftConfiguration#resource_identifier}.

---

##### `ZonalAutoshiftStatus`<sup>Optional</sup> <a name="ZonalAutoshiftStatus" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus"></a>

```go
ZonalAutoshiftStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

&arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration {
	BlockedDates: *[]*string,
	BlockedWindows: *[]*string,
	BlockingAlarms: interface{},
	OutcomeAlarms: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedDates">BlockedDates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedWindows">BlockedWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockingAlarms">BlockingAlarms</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.outcomeAlarms">OutcomeAlarms</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}. |

---

##### `BlockedDates`<sup>Optional</sup> <a name="BlockedDates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedDates"></a>

```go
BlockedDates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}.

---

##### `BlockedWindows`<sup>Optional</sup> <a name="BlockedWindows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockedWindows"></a>

```go
BlockedWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}.

---

##### `BlockingAlarms`<sup>Optional</sup> <a name="BlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.blockingAlarms"></a>

```go
BlockingAlarms interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}.

---

##### `OutcomeAlarms`<sup>Optional</sup> <a name="OutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.property.outcomeAlarms"></a>

```go
OutcomeAlarms interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

&arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms {
	AlarmIdentifier: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}. |

---

##### `AlarmIdentifier`<sup>Optional</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.alarmIdentifier"></a>

```go
AlarmIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}.

---

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

&arczonalshiftzonalautoshiftconfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms {
	AlarmIdentifier: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}. |

---

##### `AlarmIdentifier`<sup>Optional</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.alarmIdentifier"></a>

```go
AlarmIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.NewArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get"></a>

```go
func Get(index *f64) ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.NewArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetAlarmIdentifier">ResetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmIdentifier` <a name="ResetAlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetAlarmIdentifier"></a>

```go
func ResetAlarmIdentifier()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput">AlarmIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmIdentifierInput`<sup>Optional</sup> <a name="AlarmIdentifierInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput"></a>

```go
func AlarmIdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier"></a>

```go
func AlarmIdentifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.NewArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get"></a>

```go
func Get(index *f64) ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.NewArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetAlarmIdentifier">ResetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmIdentifier` <a name="ResetAlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetAlarmIdentifier"></a>

```go
func ResetAlarmIdentifier()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput">AlarmIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmIdentifierInput`<sup>Optional</sup> <a name="AlarmIdentifierInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput"></a>

```go
func AlarmIdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier"></a>

```go
func AlarmIdentifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/arczonalshiftzonalautoshiftconfiguration"

arczonalshiftzonalautoshiftconfiguration.NewArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms">PutBlockingAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms">PutOutcomeAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedDates">ResetBlockedDates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedWindows">ResetBlockedWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockingAlarms">ResetBlockingAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetOutcomeAlarms">ResetOutcomeAlarms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockingAlarms` <a name="PutBlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms"></a>

```go
func PutBlockingAlarms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putBlockingAlarms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutcomeAlarms` <a name="PutOutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms"></a>

```go
func PutOutcomeAlarms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.putOutcomeAlarms.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBlockedDates` <a name="ResetBlockedDates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedDates"></a>

```go
func ResetBlockedDates()
```

##### `ResetBlockedWindows` <a name="ResetBlockedWindows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockedWindows"></a>

```go
func ResetBlockedWindows()
```

##### `ResetBlockingAlarms` <a name="ResetBlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetBlockingAlarms"></a>

```go
func ResetBlockingAlarms()
```

##### `ResetOutcomeAlarms` <a name="ResetOutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resetOutcomeAlarms"></a>

```go
func ResetOutcomeAlarms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms">BlockingAlarms</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms">OutcomeAlarms</a></code> | <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDatesInput">BlockedDatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindowsInput">BlockedWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarmsInput">BlockingAlarmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarmsInput">OutcomeAlarmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates">BlockedDates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows">BlockedWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockingAlarms`<sup>Required</sup> <a name="BlockingAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms"></a>

```go
func BlockingAlarms() ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a>

---

##### `OutcomeAlarms`<sup>Required</sup> <a name="OutcomeAlarms" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms"></a>

```go
func OutcomeAlarms() ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a>

---

##### `BlockedDatesInput`<sup>Optional</sup> <a name="BlockedDatesInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDatesInput"></a>

```go
func BlockedDatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlockedWindowsInput`<sup>Optional</sup> <a name="BlockedWindowsInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindowsInput"></a>

```go
func BlockedWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlockingAlarmsInput`<sup>Optional</sup> <a name="BlockingAlarmsInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarmsInput"></a>

```go
func BlockingAlarmsInput() interface{}
```

- *Type:* interface{}

---

##### `OutcomeAlarmsInput`<sup>Optional</sup> <a name="OutcomeAlarmsInput" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarmsInput"></a>

```go
func OutcomeAlarmsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockedDates`<sup>Required</sup> <a name="BlockedDates" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates"></a>

```go
func BlockedDates() *[]*string
```

- *Type:* *[]*string

---

##### `BlockedWindows`<sup>Required</sup> <a name="BlockedWindows" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows"></a>

```go
func BlockedWindows() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



