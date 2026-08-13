# `dataAwsccVpclatticeResourceGateway` Submodule <a name="`dataAwsccVpclatticeResourceGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeResourceGateway <a name="DataAwsccVpclatticeResourceGateway" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_resource_gateway awscc_vpclattice_resource_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

dataawsccvpclatticeresourcegateway.NewDataAwsccVpclatticeResourceGateway(scope Construct, id *string, config DataAwsccVpclatticeResourceGatewayConfig) DataAwsccVpclatticeResourceGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig">DataAwsccVpclatticeResourceGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig">DataAwsccVpclatticeResourceGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeResourceGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

dataawsccvpclatticeresourcegateway.DataAwsccVpclatticeResourceGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

dataawsccvpclatticeresourcegateway.DataAwsccVpclatticeResourceGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

dataawsccvpclatticeresourcegateway.DataAwsccVpclatticeResourceGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

dataawsccvpclatticeresourcegateway.DataAwsccVpclatticeResourceGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccVpclatticeResourceGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccVpclatticeResourceGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccVpclatticeResourceGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_resource_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeResourceGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.resourceConfigDnsResolution">ResourceConfigDnsResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList">DataAwsccVpclatticeResourceGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.vpcIdentifier">VpcIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.ipv4AddressesPerEni"></a>

```go
func Ipv4AddressesPerEni() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceConfigDnsResolution`<sup>Required</sup> <a name="ResourceConfigDnsResolution" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.resourceConfigDnsResolution"></a>

```go
func ResourceConfigDnsResolution() *string
```

- *Type:* *string

---

##### `ResourceGatewayId`<sup>Required</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.resourceGatewayId"></a>

```go
func ResourceGatewayId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.tags"></a>

```go
func Tags() DataAwsccVpclatticeResourceGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList">DataAwsccVpclatticeResourceGatewayTagsList</a>

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.vpcIdentifier"></a>

```go
func VpcIdentifier() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeResourceGatewayConfig <a name="DataAwsccVpclatticeResourceGatewayConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

&dataawsccvpclatticeresourcegateway.DataAwsccVpclatticeResourceGatewayConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_resource_gateway#id DataAwsccVpclatticeResourceGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeResourceGatewayTags <a name="DataAwsccVpclatticeResourceGatewayTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

&dataawsccvpclatticeresourcegateway.DataAwsccVpclatticeResourceGatewayTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeResourceGatewayTagsList <a name="DataAwsccVpclatticeResourceGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

dataawsccvpclatticeresourcegateway.NewDataAwsccVpclatticeResourceGatewayTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccVpclatticeResourceGatewayTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.get"></a>

```go
func Get(index *f64) DataAwsccVpclatticeResourceGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccVpclatticeResourceGatewayTagsOutputReference <a name="DataAwsccVpclatticeResourceGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccvpclatticeresourcegateway"

dataawsccvpclatticeresourcegateway.NewDataAwsccVpclatticeResourceGatewayTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccVpclatticeResourceGatewayTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTags">DataAwsccVpclatticeResourceGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccVpclatticeResourceGatewayTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeResourceGateway.DataAwsccVpclatticeResourceGatewayTags">DataAwsccVpclatticeResourceGatewayTags</a>

---



