# `dataAwsccVpclatticeServiceNetworkResourceAssociation` Submodule <a name="`dataAwsccVpclatticeServiceNetworkResourceAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeServiceNetworkResourceAssociation <a name="DataAwsccVpclatticeServiceNetworkResourceAssociation" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/vpclattice_service_network_resource_association awscc_vpclattice_service_network_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

dataawsccvpclatticeservicenetworkresourceassociation.NewDataAwsccVpclatticeServiceNetworkResourceAssociation(scope Construct, id *string, config DataAwsccVpclatticeServiceNetworkResourceAssociationConfig) DataAwsccVpclatticeServiceNetworkResourceAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig">DataAwsccVpclatticeServiceNetworkResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig">DataAwsccVpclatticeServiceNetworkResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

dataawsccvpclatticeservicenetworkresourceassociation.DataAwsccVpclatticeServiceNetworkResourceAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

dataawsccvpclatticeservicenetworkresourceassociation.DataAwsccVpclatticeServiceNetworkResourceAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

dataawsccvpclatticeservicenetworkresourceassociation.DataAwsccVpclatticeServiceNetworkResourceAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

dataawsccvpclatticeservicenetworkresourceassociation.DataAwsccVpclatticeServiceNetworkResourceAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccVpclatticeServiceNetworkResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccVpclatticeServiceNetworkResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeServiceNetworkResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkId">ServiceNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkResourceAssociationId">ServiceNetworkResourceAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList">DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `PrivateDnsEnabled`<sup>Required</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled"></a>

```go
func PrivateDnsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationId"></a>

```go
func ResourceConfigurationId() *string
```

- *Type:* *string

---

##### `ServiceNetworkId`<sup>Required</sup> <a name="ServiceNetworkId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkId"></a>

```go
func ServiceNetworkId() *string
```

- *Type:* *string

---

##### `ServiceNetworkResourceAssociationId`<sup>Required</sup> <a name="ServiceNetworkResourceAssociationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkResourceAssociationId"></a>

```go
func ServiceNetworkResourceAssociationId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tags"></a>

```go
func Tags() DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList">DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeServiceNetworkResourceAssociationConfig <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

&dataawsccvpclatticeservicenetworkresourceassociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/vpclattice_service_network_resource_association#id DataAwsccVpclatticeServiceNetworkResourceAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeServiceNetworkResourceAssociationTags <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

&dataawsccvpclatticeservicenetworkresourceassociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

dataawsccvpclatticeservicenetworkresourceassociation.NewDataAwsccVpclatticeServiceNetworkResourceAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeservicenetworkresourceassociation"

dataawsccvpclatticeservicenetworkresourceassociation.NewDataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags">DataAwsccVpclatticeServiceNetworkResourceAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccVpclatticeServiceNetworkResourceAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags">DataAwsccVpclatticeServiceNetworkResourceAssociationTags</a>

---



