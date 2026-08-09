# `ec2TransitGatewayMulticastDomainAssociation` Submodule <a name="`ec2TransitGatewayMulticastDomainAssociation` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastDomainAssociation <a name="Ec2TransitGatewayMulticastDomainAssociation" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association awscc_ec2_transit_gateway_multicast_domain_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymulticastdomainassociation"

ec2transitgatewaymulticastdomainassociation.NewEc2TransitGatewayMulticastDomainAssociation(scope Construct, id *string, config Ec2TransitGatewayMulticastDomainAssociationConfig) Ec2TransitGatewayMulticastDomainAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig">Ec2TransitGatewayMulticastDomainAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig">Ec2TransitGatewayMulticastDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMulticastDomainAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymulticastdomainassociation"

ec2transitgatewaymulticastdomainassociation.Ec2TransitGatewayMulticastDomainAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymulticastdomainassociation"

ec2transitgatewaymulticastdomainassociation.Ec2TransitGatewayMulticastDomainAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymulticastdomainassociation"

ec2transitgatewaymulticastdomainassociation.Ec2TransitGatewayMulticastDomainAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymulticastdomainassociation"

ec2transitgatewaymulticastdomainassociation.Ec2TransitGatewayMulticastDomainAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2TransitGatewayMulticastDomainAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2TransitGatewayMulticastDomainAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2TransitGatewayMulticastDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMulticastDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainIdInput">TransitGatewayMulticastDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentIdInput"></a>

```go
func TransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="TransitGatewayMulticastDomainIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainIdInput"></a>

```go
func TransitGatewayMulticastDomainIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainId"></a>

```go
func TransitGatewayMulticastDomainId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastDomainAssociationConfig <a name="Ec2TransitGatewayMulticastDomainAssociationConfig" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2transitgatewaymulticastdomainassociation"

&ec2transitgatewaymulticastdomainassociation.Ec2TransitGatewayMulticastDomainAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SubnetId: *string,
	TransitGatewayAttachmentId: *string,
	TransitGatewayMulticastDomainId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | The IDs of the subnets to associate with the transit gateway multicast domain. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | The ID of the transit gateway attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>*string</code> | The ID of the transit gateway multicast domain. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The IDs of the subnets to associate with the transit gateway multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayAttachmentId"></a>

```go
TransitGatewayAttachmentId *string
```

- *Type:* *string

The ID of the transit gateway attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayMulticastDomainId"></a>

```go
TransitGatewayMulticastDomainId *string
```

- *Type:* *string

The ID of the transit gateway multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}

---



