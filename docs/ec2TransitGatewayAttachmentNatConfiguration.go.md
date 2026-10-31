# `ec2TransitGatewayAttachmentNatConfiguration` Submodule <a name="`ec2TransitGatewayAttachmentNatConfiguration` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayAttachmentNatConfiguration <a name="Ec2TransitGatewayAttachmentNatConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration awscc_ec2_transit_gateway_attachment_nat_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

ec2transitgatewayattachmentnatconfiguration.NewEc2TransitGatewayAttachmentNatConfiguration(scope Construct, id *string, config Ec2TransitGatewayAttachmentNatConfigurationConfig) Ec2TransitGatewayAttachmentNatConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig">Ec2TransitGatewayAttachmentNatConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig">Ec2TransitGatewayAttachmentNatConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules">PutNatGatewayRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetNatSystemRouteSupport">ResetNatSystemRouteSupport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNatGatewayRules` <a name="PutNatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules"></a>

```go
func PutNatGatewayRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.putNatGatewayRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNatSystemRouteSupport` <a name="ResetNatSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.resetNatSystemRouteSupport"></a>

```go
func ResetNatSystemRouteSupport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

ec2transitgatewayattachmentnatconfiguration.Ec2TransitGatewayAttachmentNatConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

ec2transitgatewayattachmentnatconfiguration.Ec2TransitGatewayAttachmentNatConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

ec2transitgatewayattachmentnatconfiguration.Ec2TransitGatewayAttachmentNatConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

ec2transitgatewayattachmentnatconfiguration.Ec2TransitGatewayAttachmentNatConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2TransitGatewayAttachmentNatConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2TransitGatewayAttachmentNatConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2TransitGatewayAttachmentNatConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayAttachmentNatConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules">NatGatewayRules</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRulesInput">NatGatewayRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupportInput">NatGatewaySupportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupportInput">NatSystemRouteSupportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport">NatGatewaySupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport">NatSystemRouteSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NatGatewayRules`<sup>Required</sup> <a name="NatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRules"></a>

```go
func NatGatewayRules() Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList">Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList</a>

---

##### `NatGatewayRulesInput`<sup>Optional</sup> <a name="NatGatewayRulesInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewayRulesInput"></a>

```go
func NatGatewayRulesInput() interface{}
```

- *Type:* interface{}

---

##### `NatGatewaySupportInput`<sup>Optional</sup> <a name="NatGatewaySupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupportInput"></a>

```go
func NatGatewaySupportInput() *string
```

- *Type:* *string

---

##### `NatSystemRouteSupportInput`<sup>Optional</sup> <a name="NatSystemRouteSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupportInput"></a>

```go
func NatSystemRouteSupportInput() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentIdInput"></a>

```go
func TransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `NatGatewaySupport`<sup>Required</sup> <a name="NatGatewaySupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natGatewaySupport"></a>

```go
func NatGatewaySupport() *string
```

- *Type:* *string

---

##### `NatSystemRouteSupport`<sup>Required</sup> <a name="NatSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.natSystemRouteSupport"></a>

```go
func NatSystemRouteSupport() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayAttachmentNatConfigurationConfig <a name="Ec2TransitGatewayAttachmentNatConfigurationConfig" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

&ec2transitgatewayattachmentnatconfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NatGatewayRules: interface{},
	NatGatewaySupport: *string,
	TransitGatewayAttachmentId: *string,
	NatSystemRouteSupport: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewayRules">NatGatewayRules</a></code> | <code>interface{}</code> | The complete set of NAT rules for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewaySupport">NatGatewaySupport</a></code> | <code>*string</code> | Whether NAT gateway support is enabled on the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | The ID of the transit gateway attachment to configure NAT on. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natSystemRouteSupport">NatSystemRouteSupport</a></code> | <code>*string</code> | Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NatGatewayRules`<sup>Required</sup> <a name="NatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewayRules"></a>

```go
NatGatewayRules interface{}
```

- *Type:* interface{}

The complete set of NAT rules for the attachment.

Updating this property replaces the entire rule set: rules omitted from the new value are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_rules Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_rules}

---

##### `NatGatewaySupport`<sup>Required</sup> <a name="NatGatewaySupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natGatewaySupport"></a>

```go
NatGatewaySupport *string
```

- *Type:* *string

Whether NAT gateway support is enabled on the attachment.

Set to disable to stage NAT rules without activating them; the rules are retained and become active when this is later set to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_gateway_support Ec2TransitGatewayAttachmentNatConfiguration#nat_gateway_support}

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.transitGatewayAttachmentId"></a>

```go
TransitGatewayAttachmentId *string
```

- *Type:* *string

The ID of the transit gateway attachment to configure NAT on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#transit_gateway_attachment_id Ec2TransitGatewayAttachmentNatConfiguration#transit_gateway_attachment_id}

---

##### `NatSystemRouteSupport`<sup>Optional</sup> <a name="NatSystemRouteSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationConfig.property.natSystemRouteSupport"></a>

```go
NatSystemRouteSupport *string
```

- *Type:* *string

Whether routes for the NAT CIDRs are installed into the transit gateway route tables associated with the attachment.

Whether this is configurable depends on the attachment; where the value is forced, supplying the opposite value is rejected. Omitting this property leaves the setting to the service: on a new configuration the service applies the attachment's default, but on an attachment where the value is configurable it keeps the value already in effect rather than reverting to that default. Removing this property from a template, or deleting this resource, therefore leaves the setting at its last value rather than restoring the default, and a resource later created on the same attachment without this property inherits that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_system_route_support Ec2TransitGatewayAttachmentNatConfiguration#nat_system_route_support}

---

### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

&ec2transitgatewayattachmentnatconfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules {
	MatchSourceCidr: *string,
	NatCidr: *string,
	RuleNumber: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.matchSourceCidr">MatchSourceCidr</a></code> | <code>*string</code> | The source CIDR that the rule matches on. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.natCidr">NatCidr</a></code> | <code>*string</code> | The CIDR that the matched source addresses are translated to. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.ruleNumber">RuleNumber</a></code> | <code>*f64</code> | The rule number. |

---

##### `MatchSourceCidr`<sup>Required</sup> <a name="MatchSourceCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.matchSourceCidr"></a>

```go
MatchSourceCidr *string
```

- *Type:* *string

The source CIDR that the rule matches on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#match_source_cidr Ec2TransitGatewayAttachmentNatConfiguration#match_source_cidr}

---

##### `NatCidr`<sup>Required</sup> <a name="NatCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.natCidr"></a>

```go
NatCidr *string
```

- *Type:* *string

The CIDR that the matched source addresses are translated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#nat_cidr Ec2TransitGatewayAttachmentNatConfiguration#nat_cidr}

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRules.property.ruleNumber"></a>

```go
RuleNumber *f64
```

- *Type:* *f64

The rule number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ec2_transit_gateway_attachment_nat_configuration#rule_number Ec2TransitGatewayAttachmentNatConfiguration#rule_number}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

ec2transitgatewayattachmentnatconfiguration.NewEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get"></a>

```go
func Get(index *f64) Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference <a name="Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2transitgatewayattachmentnatconfiguration"

ec2transitgatewayattachmentnatconfiguration.NewEc2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidrInput">MatchSourceCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidrInput">NatCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumberInput">RuleNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr">MatchSourceCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr">NatCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchSourceCidrInput`<sup>Optional</sup> <a name="MatchSourceCidrInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidrInput"></a>

```go
func MatchSourceCidrInput() *string
```

- *Type:* *string

---

##### `NatCidrInput`<sup>Optional</sup> <a name="NatCidrInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidrInput"></a>

```go
func NatCidrInput() *string
```

- *Type:* *string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumberInput"></a>

```go
func RuleNumberInput() *f64
```

- *Type:* *f64

---

##### `MatchSourceCidr`<sup>Required</sup> <a name="MatchSourceCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.matchSourceCidr"></a>

```go
func MatchSourceCidr() *string
```

- *Type:* *string

---

##### `NatCidr`<sup>Required</sup> <a name="NatCidr" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.natCidr"></a>

```go
func NatCidr() *string
```

- *Type:* *string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.ruleNumber"></a>

```go
func RuleNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachmentNatConfiguration.Ec2TransitGatewayAttachmentNatConfigurationNatGatewayRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



