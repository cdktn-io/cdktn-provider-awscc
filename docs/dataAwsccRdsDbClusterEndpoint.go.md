# `dataAwsccRdsDbClusterEndpoint` Submodule <a name="`dataAwsccRdsDbClusterEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRdsDbClusterEndpointA <a name="DataAwsccRdsDbClusterEndpointA" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

dataawsccrdsdbclusterendpoint.NewDataAwsccRdsDbClusterEndpointA(scope Construct, id *string, config DataAwsccRdsDbClusterEndpointAConfig) DataAwsccRdsDbClusterEndpointA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig">DataAwsccRdsDbClusterEndpointAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig">DataAwsccRdsDbClusterEndpointAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

dataawsccrdsdbclusterendpoint.DataAwsccRdsDbClusterEndpointA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

dataawsccrdsdbclusterendpoint.DataAwsccRdsDbClusterEndpointA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

dataawsccrdsdbclusterendpoint.DataAwsccRdsDbClusterEndpointA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

dataawsccrdsdbclusterendpoint.DataAwsccRdsDbClusterEndpointA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRdsDbClusterEndpointA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRdsDbClusterEndpointA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRdsDbClusterEndpointA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.customEndpointType">CustomEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointArn">DbClusterEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointIdentifier">DbClusterEndpointIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier">DbClusterEndpointResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.excludedMembers">ExcludedMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.staticMembers">StaticMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList">DataAwsccRdsDbClusterEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CustomEndpointType`<sup>Required</sup> <a name="CustomEndpointType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.customEndpointType"></a>

```go
func CustomEndpointType() *string
```

- *Type:* *string

---

##### `DbClusterEndpointArn`<sup>Required</sup> <a name="DbClusterEndpointArn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointArn"></a>

```go
func DbClusterEndpointArn() *string
```

- *Type:* *string

---

##### `DbClusterEndpointIdentifier`<sup>Required</sup> <a name="DbClusterEndpointIdentifier" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointIdentifier"></a>

```go
func DbClusterEndpointIdentifier() *string
```

- *Type:* *string

---

##### `DbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="DbClusterEndpointResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier"></a>

```go
func DbClusterEndpointResourceIdentifier() *string
```

- *Type:* *string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterIdentifier"></a>

```go
func DbClusterIdentifier() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `ExcludedMembers`<sup>Required</sup> <a name="ExcludedMembers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.excludedMembers"></a>

```go
func ExcludedMembers() *[]*string
```

- *Type:* *[]*string

---

##### `StaticMembers`<sup>Required</sup> <a name="StaticMembers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.staticMembers"></a>

```go
func StaticMembers() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tags"></a>

```go
func Tags() DataAwsccRdsDbClusterEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList">DataAwsccRdsDbClusterEndpointTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRdsDbClusterEndpointAConfig <a name="DataAwsccRdsDbClusterEndpointAConfig" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

&dataawsccrdsdbclusterendpoint.DataAwsccRdsDbClusterEndpointAConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/rds_db_cluster_endpoint#id DataAwsccRdsDbClusterEndpointA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRdsDbClusterEndpointTags <a name="DataAwsccRdsDbClusterEndpointTags" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

&dataawsccrdsdbclusterendpoint.DataAwsccRdsDbClusterEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRdsDbClusterEndpointTagsList <a name="DataAwsccRdsDbClusterEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

dataawsccrdsdbclusterendpoint.NewDataAwsccRdsDbClusterEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRdsDbClusterEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRdsDbClusterEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRdsDbClusterEndpointTagsOutputReference <a name="DataAwsccRdsDbClusterEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrdsdbclusterendpoint"

dataawsccrdsdbclusterendpoint.NewDataAwsccRdsDbClusterEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRdsDbClusterEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags">DataAwsccRdsDbClusterEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRdsDbClusterEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags">DataAwsccRdsDbClusterEndpointTags</a>

---



