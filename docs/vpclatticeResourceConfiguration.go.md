# `vpclatticeResourceConfiguration` Submodule <a name="`vpclatticeResourceConfiguration` Submodule" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeResourceConfiguration <a name="VpclatticeResourceConfiguration" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.NewVpclatticeResourceConfiguration(scope Construct, id *string, config VpclatticeResourceConfigurationConfig) VpclatticeResourceConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig">VpclatticeResourceConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig">VpclatticeResourceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition">PutResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork">ResetAllowAssociationToSharableServiceNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName">ResetCustomDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId">ResetDomainVerificationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain">ResetGroupDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType">ResetResourceConfigurationAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition">ResetResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId">ResetResourceConfigurationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId">ResetResourceGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceConfigurationDefinition` <a name="PutResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition"></a>

```go
func PutResourceConfigurationDefinition(value VpclatticeResourceConfigurationResourceConfigurationDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowAssociationToSharableServiceNetwork` <a name="ResetAllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork"></a>

```go
func ResetAllowAssociationToSharableServiceNetwork()
```

##### `ResetCustomDomainName` <a name="ResetCustomDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName"></a>

```go
func ResetCustomDomainName()
```

##### `ResetDomainVerificationId` <a name="ResetDomainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId"></a>

```go
func ResetDomainVerificationId()
```

##### `ResetGroupDomain` <a name="ResetGroupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain"></a>

```go
func ResetGroupDomain()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges"></a>

```go
func ResetPortRanges()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType"></a>

```go
func ResetProtocolType()
```

##### `ResetResourceConfigurationAuthType` <a name="ResetResourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType"></a>

```go
func ResetResourceConfigurationAuthType()
```

##### `ResetResourceConfigurationDefinition` <a name="ResetResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition"></a>

```go
func ResetResourceConfigurationDefinition()
```

##### `ResetResourceConfigurationGroupId` <a name="ResetResourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId"></a>

```go
func ResetResourceConfigurationGroupId()
```

##### `ResetResourceGatewayId` <a name="ResetResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId"></a>

```go
func ResetResourceGatewayId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.VpclatticeResourceConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.VpclatticeResourceConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.VpclatticeResourceConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.VpclatticeResourceConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpclatticeResourceConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpclatticeResourceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeResourceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition">ResourceConfigurationDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput">AllowAssociationToSharableServiceNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput">CustomDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput">DomainVerificationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput">GroupDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput">PortRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput">ResourceConfigurationAuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput">ResourceConfigurationDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput">ResourceConfigurationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput">ResourceConfigurationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput">ResourceGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork">AllowAssociationToSharableServiceNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName">CustomDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId">DomainVerificationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain">GroupDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType">ProtocolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType">ResourceConfigurationAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId">ResourceConfigurationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType">ResourceConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceConfigurationDefinition`<sup>Required</sup> <a name="ResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition"></a>

```go
func ResourceConfigurationDefinition() VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a>

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId"></a>

```go
func ResourceConfigurationId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags"></a>

```go
func Tags() VpclatticeResourceConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a>

---

##### `AllowAssociationToSharableServiceNetworkInput`<sup>Optional</sup> <a name="AllowAssociationToSharableServiceNetworkInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput"></a>

```go
func AllowAssociationToSharableServiceNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `CustomDomainNameInput`<sup>Optional</sup> <a name="CustomDomainNameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput"></a>

```go
func CustomDomainNameInput() *string
```

- *Type:* *string

---

##### `DomainVerificationIdInput`<sup>Optional</sup> <a name="DomainVerificationIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput"></a>

```go
func DomainVerificationIdInput() *string
```

- *Type:* *string

---

##### `GroupDomainInput`<sup>Optional</sup> <a name="GroupDomainInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput"></a>

```go
func GroupDomainInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput"></a>

```go
func PortRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput"></a>

```go
func ProtocolTypeInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationAuthTypeInput`<sup>Optional</sup> <a name="ResourceConfigurationAuthTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput"></a>

```go
func ResourceConfigurationAuthTypeInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationDefinitionInput`<sup>Optional</sup> <a name="ResourceConfigurationDefinitionInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput"></a>

```go
func ResourceConfigurationDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceConfigurationGroupIdInput`<sup>Optional</sup> <a name="ResourceConfigurationGroupIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput"></a>

```go
func ResourceConfigurationGroupIdInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationTypeInput`<sup>Optional</sup> <a name="ResourceConfigurationTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput"></a>

```go
func ResourceConfigurationTypeInput() *string
```

- *Type:* *string

---

##### `ResourceGatewayIdInput`<sup>Optional</sup> <a name="ResourceGatewayIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput"></a>

```go
func ResourceGatewayIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAssociationToSharableServiceNetwork`<sup>Required</sup> <a name="AllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork"></a>

```go
func AllowAssociationToSharableServiceNetwork() interface{}
```

- *Type:* interface{}

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName"></a>

```go
func CustomDomainName() *string
```

- *Type:* *string

---

##### `DomainVerificationId`<sup>Required</sup> <a name="DomainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId"></a>

```go
func DomainVerificationId() *string
```

- *Type:* *string

---

##### `GroupDomain`<sup>Required</sup> <a name="GroupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain"></a>

```go
func GroupDomain() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType"></a>

```go
func ProtocolType() *string
```

- *Type:* *string

---

##### `ResourceConfigurationAuthType`<sup>Required</sup> <a name="ResourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType"></a>

```go
func ResourceConfigurationAuthType() *string
```

- *Type:* *string

---

##### `ResourceConfigurationGroupId`<sup>Required</sup> <a name="ResourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId"></a>

```go
func ResourceConfigurationGroupId() *string
```

- *Type:* *string

---

##### `ResourceConfigurationType`<sup>Required</sup> <a name="ResourceConfigurationType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType"></a>

```go
func ResourceConfigurationType() *string
```

- *Type:* *string

---

##### `ResourceGatewayId`<sup>Required</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId"></a>

```go
func ResourceGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeResourceConfigurationConfig <a name="VpclatticeResourceConfigurationConfig" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

&vpclatticeresourceconfiguration.VpclatticeResourceConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceConfigurationType: *string,
	AllowAssociationToSharableServiceNetwork: interface{},
	CustomDomainName: *string,
	DomainVerificationId: *string,
	GroupDomain: *string,
	PortRanges: *[]*string,
	ProtocolType: *string,
	ResourceConfigurationAuthType: *string,
	ResourceConfigurationDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition,
	ResourceConfigurationGroupId: *string,
	ResourceGatewayId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType">ResourceConfigurationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork">AllowAssociationToSharableServiceNetwork</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName">CustomDomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId">DomainVerificationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain">GroupDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType">ProtocolType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType">ResourceConfigurationAuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition">ResourceConfigurationDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId">ResourceConfigurationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}.

---

##### `ResourceConfigurationType`<sup>Required</sup> <a name="ResourceConfigurationType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType"></a>

```go
ResourceConfigurationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}.

---

##### `AllowAssociationToSharableServiceNetwork`<sup>Optional</sup> <a name="AllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork"></a>

```go
AllowAssociationToSharableServiceNetwork interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}.

---

##### `CustomDomainName`<sup>Optional</sup> <a name="CustomDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName"></a>

```go
CustomDomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}.

---

##### `DomainVerificationId`<sup>Optional</sup> <a name="DomainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId"></a>

```go
DomainVerificationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}.

---

##### `GroupDomain`<sup>Optional</sup> <a name="GroupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain"></a>

```go
GroupDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}.

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges"></a>

```go
PortRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}.

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType"></a>

```go
ProtocolType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}.

---

##### `ResourceConfigurationAuthType`<sup>Optional</sup> <a name="ResourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType"></a>

```go
ResourceConfigurationAuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}.

---

##### `ResourceConfigurationDefinition`<sup>Optional</sup> <a name="ResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition"></a>

```go
ResourceConfigurationDefinition VpclatticeResourceConfigurationResourceConfigurationDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}.

---

##### `ResourceConfigurationGroupId`<sup>Optional</sup> <a name="ResourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId"></a>

```go
ResourceConfigurationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}.

---

##### `ResourceGatewayId`<sup>Optional</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId"></a>

```go
ResourceGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinition <a name="VpclatticeResourceConfigurationResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

&vpclatticeresourceconfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition {
	ArnResource: *string,
	DnsResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource,
	IpResource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource">ArnResource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource">DnsResource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource">IpResource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}. |

---

##### `ArnResource`<sup>Optional</sup> <a name="ArnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource"></a>

```go
ArnResource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}.

---

##### `DnsResource`<sup>Optional</sup> <a name="DnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource"></a>

```go
DnsResource VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}.

---

##### `IpResource`<sup>Optional</sup> <a name="IpResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource"></a>

```go
IpResource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

&vpclatticeresourceconfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource {
	DomainName: *string,
	IpAddressType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}. |

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}.

---

### VpclatticeResourceConfigurationTags <a name="VpclatticeResourceConfigurationTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

&vpclatticeresourceconfiguration.VpclatticeResourceConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.NewVpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.NewVpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource">PutDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource">ResetArnResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource">ResetDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource">ResetIpResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsResource` <a name="PutDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource"></a>

```go
func PutDnsResource(value VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---

##### `ResetArnResource` <a name="ResetArnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource"></a>

```go
func ResetArnResource()
```

##### `ResetDnsResource` <a name="ResetDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource"></a>

```go
func ResetDnsResource()
```

##### `ResetIpResource` <a name="ResetIpResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource"></a>

```go
func ResetIpResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource">DnsResource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput">ArnResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput">DnsResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput">IpResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource">ArnResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource">IpResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsResource`<sup>Required</sup> <a name="DnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource"></a>

```go
func DnsResource() VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a>

---

##### `ArnResourceInput`<sup>Optional</sup> <a name="ArnResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput"></a>

```go
func ArnResourceInput() *string
```

- *Type:* *string

---

##### `DnsResourceInput`<sup>Optional</sup> <a name="DnsResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput"></a>

```go
func DnsResourceInput() interface{}
```

- *Type:* interface{}

---

##### `IpResourceInput`<sup>Optional</sup> <a name="IpResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput"></a>

```go
func IpResourceInput() *string
```

- *Type:* *string

---

##### `ArnResource`<sup>Required</sup> <a name="ArnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource"></a>

```go
func ArnResource() *string
```

- *Type:* *string

---

##### `IpResource`<sup>Required</sup> <a name="IpResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource"></a>

```go
func IpResource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpclatticeResourceConfigurationTagsList <a name="VpclatticeResourceConfigurationTagsList" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.NewVpclatticeResourceConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpclatticeResourceConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get"></a>

```go
func Get(index *f64) VpclatticeResourceConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpclatticeResourceConfigurationTagsOutputReference <a name="VpclatticeResourceConfigurationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/vpclatticeresourceconfiguration"

vpclatticeresourceconfiguration.NewVpclatticeResourceConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpclatticeResourceConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



