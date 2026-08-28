# `dataAwsccNetworkfirewallVpcEndpointAssociation` Submodule <a name="`dataAwsccNetworkfirewallVpcEndpointAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallVpcEndpointAssociation <a name="DataAwsccNetworkfirewallVpcEndpointAssociation" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkfirewall_vpc_endpoint_association awscc_networkfirewall_vpc_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.NewDataAwsccNetworkfirewallVpcEndpointAssociation(scope Construct, id *string, config DataAwsccNetworkfirewallVpcEndpointAssociationConfig) DataAwsccNetworkfirewallVpcEndpointAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig">DataAwsccNetworkfirewallVpcEndpointAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig">DataAwsccNetworkfirewallVpcEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.DataAwsccNetworkfirewallVpcEndpointAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.DataAwsccNetworkfirewallVpcEndpointAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.DataAwsccNetworkfirewallVpcEndpointAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.DataAwsccNetworkfirewallVpcEndpointAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNetworkfirewallVpcEndpointAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNetworkfirewallVpcEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkfirewall_vpc_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallVpcEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList">DataAwsccNetworkfirewallVpcEndpointAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn">VpcEndpointAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId">VpcEndpointAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.firewallArn"></a>

```go
func FirewallArn() *string
```

- *Type:* *string

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.subnetMapping"></a>

```go
func SubnetMapping() DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tags"></a>

```go
func Tags() DataAwsccNetworkfirewallVpcEndpointAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList">DataAwsccNetworkfirewallVpcEndpointAssociationTagsList</a>

---

##### `VpcEndpointAssociationArn`<sup>Required</sup> <a name="VpcEndpointAssociationArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn"></a>

```go
func VpcEndpointAssociationArn() *string
```

- *Type:* *string

---

##### `VpcEndpointAssociationId`<sup>Required</sup> <a name="VpcEndpointAssociationId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId"></a>

```go
func VpcEndpointAssociationId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallVpcEndpointAssociationConfig <a name="DataAwsccNetworkfirewallVpcEndpointAssociationConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

&dataawsccnetworkfirewallvpcendpointassociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkfirewall_vpc_endpoint_association#id DataAwsccNetworkfirewallVpcEndpointAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping <a name="DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

&dataawsccnetworkfirewallvpcendpointassociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping {

}
```


### DataAwsccNetworkfirewallVpcEndpointAssociationTags <a name="DataAwsccNetworkfirewallVpcEndpointAssociationTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

&dataawsccnetworkfirewallvpcendpointassociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference <a name="DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.NewDataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---


### DataAwsccNetworkfirewallVpcEndpointAssociationTagsList <a name="DataAwsccNetworkfirewallVpcEndpointAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.NewDataAwsccNetworkfirewallVpcEndpointAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkfirewallVpcEndpointAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference <a name="DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkfirewallvpcendpointassociation"

dataawsccnetworkfirewallvpcendpointassociation.NewDataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags">DataAwsccNetworkfirewallVpcEndpointAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkfirewallVpcEndpointAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags">DataAwsccNetworkfirewallVpcEndpointAssociationTags</a>

---



