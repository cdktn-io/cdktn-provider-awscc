# `dataAwsccRoute53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`dataAwsccRoute53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpoint <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.NewDataAwsccRoute53GlobalresolverCoreNetworkEndpoint(scope Construct, id *string, config DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig) DataAwsccRoute53GlobalresolverCoreNetworkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig">DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig">DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverCoreNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.availableRegions">AvailableRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">CoreNetworkEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">GlobalResolverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">IpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailableRegions`<sup>Required</sup> <a name="AvailableRegions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```go
func AvailableRegions() *[]*string
```

- *Type:* *[]*string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `CoreNetworkEndpointId`<sup>Required</sup> <a name="CoreNetworkEndpointId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```go
func CoreNetworkEndpointId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```go
func GlobalResolverId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```go
func IpAddresses() DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```go
func Tags() DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

&dataawsccroute53globalresolvercorenetworkendpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint#id DataAwsccRoute53GlobalresolverCoreNetworkEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

&dataawsccroute53globalresolvercorenetworkendpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses {

}
```


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

&dataawsccroute53globalresolvercorenetworkendpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.NewDataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.NewDataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">DnsLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">RegionScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsLabel`<sup>Required</sup> <a name="DnsLabel" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```go
func DnsLabel() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RegionScope`<sup>Required</sup> <a name="RegionScope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```go
func RegionScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses</a>

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.NewDataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53globalresolvercorenetworkendpoint"

dataawsccroute53globalresolvercorenetworkendpoint.NewDataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags</a>

---



