# `dataAwsccEc2SubnetNetworkAclAssociation` Submodule <a name="`dataAwsccEc2SubnetNetworkAclAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2SubnetNetworkAclAssociation <a name="DataAwsccEc2SubnetNetworkAclAssociation" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_subnet_network_acl_association awscc_ec2_subnet_network_acl_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2subnetnetworkaclassociation"

dataawsccec2subnetnetworkaclassociation.NewDataAwsccEc2SubnetNetworkAclAssociation(scope Construct, id *string, config DataAwsccEc2SubnetNetworkAclAssociationConfig) DataAwsccEc2SubnetNetworkAclAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig">DataAwsccEc2SubnetNetworkAclAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig">DataAwsccEc2SubnetNetworkAclAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2SubnetNetworkAclAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2subnetnetworkaclassociation"

dataawsccec2subnetnetworkaclassociation.DataAwsccEc2SubnetNetworkAclAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2subnetnetworkaclassociation"

dataawsccec2subnetnetworkaclassociation.DataAwsccEc2SubnetNetworkAclAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2subnetnetworkaclassociation"

dataawsccec2subnetnetworkaclassociation.DataAwsccEc2SubnetNetworkAclAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2subnetnetworkaclassociation"

dataawsccec2subnetnetworkaclassociation.DataAwsccEc2SubnetNetworkAclAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2SubnetNetworkAclAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2SubnetNetworkAclAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2SubnetNetworkAclAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_subnet_network_acl_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2SubnetNetworkAclAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.networkAclId">NetworkAclId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `NetworkAclId`<sup>Required</sup> <a name="NetworkAclId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.networkAclId"></a>

```go
func NetworkAclId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2SubnetNetworkAclAssociationConfig <a name="DataAwsccEc2SubnetNetworkAclAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2subnetnetworkaclassociation"

&dataawsccec2subnetnetworkaclassociation.DataAwsccEc2SubnetNetworkAclAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2SubnetNetworkAclAssociation.DataAwsccEc2SubnetNetworkAclAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_subnet_network_acl_association#id DataAwsccEc2SubnetNetworkAclAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



