# `dataAwsccSagemakerCluster` Submodule <a name="`dataAwsccSagemakerCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerCluster <a name="DataAwsccSagemakerCluster" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_cluster awscc_sagemaker_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerCluster(scope Construct, id *string, config DataAwsccSagemakerClusterConfig) DataAwsccSagemakerCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig">DataAwsccSagemakerClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig">DataAwsccSagemakerClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.DataAwsccSagemakerCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.DataAwsccSagemakerCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.DataAwsccSagemakerCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.DataAwsccSagemakerCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference">DataAwsccSagemakerClusterAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterRole">ClusterRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterStatus">ClusterStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.failureMessage">FailureMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.instanceGroups">InstanceGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList">DataAwsccSagemakerClusterInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.nodeProvisioningMode">NodeProvisioningMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.nodeRecovery">NodeRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.orchestrator">Orchestrator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference">DataAwsccSagemakerClusterOrchestratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.restrictedInstanceGroups">RestrictedInstanceGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList">DataAwsccSagemakerClusterRestrictedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList">DataAwsccSagemakerClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.tieredStorageConfig">TieredStorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference">DataAwsccSagemakerClusterTieredStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference">DataAwsccSagemakerClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.autoScaling"></a>

```go
func AutoScaling() DataAwsccSagemakerClusterAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference">DataAwsccSagemakerClusterAutoScalingOutputReference</a>

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ClusterRole`<sup>Required</sup> <a name="ClusterRole" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterRole"></a>

```go
func ClusterRole() *string
```

- *Type:* *string

---

##### `ClusterStatus`<sup>Required</sup> <a name="ClusterStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.clusterStatus"></a>

```go
func ClusterStatus() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.failureMessage"></a>

```go
func FailureMessage() *string
```

- *Type:* *string

---

##### `InstanceGroups`<sup>Required</sup> <a name="InstanceGroups" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.instanceGroups"></a>

```go
func InstanceGroups() DataAwsccSagemakerClusterInstanceGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList">DataAwsccSagemakerClusterInstanceGroupsList</a>

---

##### `NodeProvisioningMode`<sup>Required</sup> <a name="NodeProvisioningMode" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.nodeProvisioningMode"></a>

```go
func NodeProvisioningMode() *string
```

- *Type:* *string

---

##### `NodeRecovery`<sup>Required</sup> <a name="NodeRecovery" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.nodeRecovery"></a>

```go
func NodeRecovery() *string
```

- *Type:* *string

---

##### `Orchestrator`<sup>Required</sup> <a name="Orchestrator" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.orchestrator"></a>

```go
func Orchestrator() DataAwsccSagemakerClusterOrchestratorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference">DataAwsccSagemakerClusterOrchestratorOutputReference</a>

---

##### `RestrictedInstanceGroups`<sup>Required</sup> <a name="RestrictedInstanceGroups" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.restrictedInstanceGroups"></a>

```go
func RestrictedInstanceGroups() DataAwsccSagemakerClusterRestrictedInstanceGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList">DataAwsccSagemakerClusterRestrictedInstanceGroupsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.tags"></a>

```go
func Tags() DataAwsccSagemakerClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList">DataAwsccSagemakerClusterTagsList</a>

---

##### `TieredStorageConfig`<sup>Required</sup> <a name="TieredStorageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.tieredStorageConfig"></a>

```go
func TieredStorageConfig() DataAwsccSagemakerClusterTieredStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference">DataAwsccSagemakerClusterTieredStorageConfigOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccSagemakerClusterVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference">DataAwsccSagemakerClusterVpcConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerClusterAutoScaling <a name="DataAwsccSagemakerClusterAutoScaling" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScaling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterAutoScaling {

}
```


### DataAwsccSagemakerClusterConfig <a name="DataAwsccSagemakerClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_cluster#id DataAwsccSagemakerCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerClusterInstanceGroups <a name="DataAwsccSagemakerClusterInstanceGroups" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroups {

}
```


### DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements <a name="DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements {

}
```


### DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs <a name="DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs {

}
```


### DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig {

}
```


### DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig <a name="DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig {

}
```


### DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints <a name="DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints {

}
```


### DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig <a name="DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig {

}
```


### DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig <a name="DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig {

}
```


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig {

}
```


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig {

}
```


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration {

}
```


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy {

}
```


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize {

}
```


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {

}
```


### DataAwsccSagemakerClusterOrchestrator <a name="DataAwsccSagemakerClusterOrchestrator" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestrator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestrator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterOrchestrator {

}
```


### DataAwsccSagemakerClusterOrchestratorEks <a name="DataAwsccSagemakerClusterOrchestratorEks" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterOrchestratorEks {

}
```


### DataAwsccSagemakerClusterRestrictedInstanceGroups <a name="DataAwsccSagemakerClusterRestrictedInstanceGroups" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterRestrictedInstanceGroups {

}
```


### DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig {

}
```


### DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig {

}
```


### DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs {

}
```


### DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig {

}
```


### DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig {

}
```


### DataAwsccSagemakerClusterTags <a name="DataAwsccSagemakerClusterTags" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterTags {

}
```


### DataAwsccSagemakerClusterTieredStorageConfig <a name="DataAwsccSagemakerClusterTieredStorageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterTieredStorageConfig {

}
```


### DataAwsccSagemakerClusterVpcConfig <a name="DataAwsccSagemakerClusterVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

&dataawsccsagemakercluster.DataAwsccSagemakerClusterVpcConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerClusterAutoScalingOutputReference <a name="DataAwsccSagemakerClusterAutoScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.autoScalerType">AutoScalerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScaling">DataAwsccSagemakerClusterAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalerType`<sup>Required</sup> <a name="AutoScalerType" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.autoScalerType"></a>

```go
func AutoScalerType() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterAutoScaling">DataAwsccSagemakerClusterAutoScaling</a>

---


### DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand">OnDemand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot">Spot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements">DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.onDemand"></a>

```go
func OnDemand() *string
```

- *Type:* *string

---

##### `Spot`<sup>Required</sup> <a name="Spot" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.spot"></a>

```go
func Spot() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements">DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements</a>

---


### DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">RootVolume</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```go
func RootVolume() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList <a name="DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">EbsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsVolumeConfig`<sup>Required</sup> <a name="EbsVolumeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```go
func EbsVolumeConfig() DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs</a>

---


### DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.taints"></a>

```go
func Taints() DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig</a>

---


### DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList <a name="DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints</a>

---


### DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate">OnCreate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri">SourceS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig">DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnCreate`<sup>Required</sup> <a name="OnCreate" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.onCreate"></a>

```go
func OnCreate() *string
```

- *Type:* *string

---

##### `SourceS3Uri`<sup>Required</sup> <a name="SourceS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.sourceS3Uri"></a>

```go
func SourceS3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig">DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig</a>

---


### DataAwsccSagemakerClusterInstanceGroupsList <a name="DataAwsccSagemakerClusterInstanceGroupsList" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterInstanceGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterInstanceGroupsOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterInstanceGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements">CapacityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.currentCount">CurrentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName">InstanceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs">InstanceStorageConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig">KubernetesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig">LifeCycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks">OnStartDeepHealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig">OverrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig">ScheduledUpdateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroups">DataAwsccSagemakerClusterInstanceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityRequirements`<sup>Required</sup> <a name="CapacityRequirements" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.capacityRequirements"></a>

```go
func CapacityRequirements() DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference">DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference</a>

---

##### `CurrentCount`<sup>Required</sup> <a name="CurrentCount" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.currentCount"></a>

```go
func CurrentCount() *f64
```

- *Type:* *f64

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceGroupName`<sup>Required</sup> <a name="InstanceGroupName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceGroupName"></a>

```go
func InstanceGroupName() *string
```

- *Type:* *string

---

##### `InstanceStorageConfigs`<sup>Required</sup> <a name="InstanceStorageConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```go
func InstanceStorageConfigs() DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList">DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `KubernetesConfig`<sup>Required</sup> <a name="KubernetesConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.kubernetesConfig"></a>

```go
func KubernetesConfig() DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference</a>

---

##### `LifeCycleConfig`<sup>Required</sup> <a name="LifeCycleConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.lifeCycleConfig"></a>

```go
func LifeCycleConfig() DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference</a>

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `OnStartDeepHealthChecks`<sup>Required</sup> <a name="OnStartDeepHealthChecks" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```go
func OnStartDeepHealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `OverrideVpcConfig`<sup>Required</sup> <a name="OverrideVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```go
func OverrideVpcConfig() DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `ScheduledUpdateConfig`<sup>Required</sup> <a name="ScheduledUpdateConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.scheduledUpdateConfig"></a>

```go
func ScheduledUpdateConfig() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference</a>

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```go
func TrainingPlanArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroups">DataAwsccSagemakerClusterInstanceGroups</a>

---


### DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig">DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig">DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig</a>

---


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName">AlarmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmName"></a>

```go
func AlarmName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration</a>

---


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```go
func AutoRollbackConfiguration() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `RollingUpdatePolicy`<sup>Required</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```go
func RollingUpdatePolicy() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.waitIntervalInSeconds"></a>

```go
func WaitIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig</a>

---


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBatchSize`<sup>Required</sup> <a name="MaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```go
func MaximumBatchSize() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `RollbackMaximumBatchSize`<sup>Required</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```go
func RollbackMaximumBatchSize() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy</a>

---


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference <a name="DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentConfig`<sup>Required</sup> <a name="DeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.deploymentConfig"></a>

```go
func DeploymentConfig() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference</a>

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig">DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig</a>

---


### DataAwsccSagemakerClusterOrchestratorEksOutputReference <a name="DataAwsccSagemakerClusterOrchestratorEksOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterOrchestratorEksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterOrchestratorEksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEks">DataAwsccSagemakerClusterOrchestratorEks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterOrchestratorEks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEks">DataAwsccSagemakerClusterOrchestratorEks</a>

---


### DataAwsccSagemakerClusterOrchestratorOutputReference <a name="DataAwsccSagemakerClusterOrchestratorOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterOrchestratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterOrchestratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference">DataAwsccSagemakerClusterOrchestratorEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestrator">DataAwsccSagemakerClusterOrchestrator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Eks`<sup>Required</sup> <a name="Eks" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.eks"></a>

```go
func Eks() DataAwsccSagemakerClusterOrchestratorEksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorEksOutputReference">DataAwsccSagemakerClusterOrchestratorEksOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestratorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterOrchestrator
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterOrchestrator">DataAwsccSagemakerClusterOrchestrator</a>

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB">SizeInGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.perUnitStorageThroughput"></a>

```go
func PerUnitStorageThroughput() *f64
```

- *Type:* *f64

---

##### `SizeInGiB`<sup>Required</sup> <a name="SizeInGiB" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.sizeInGiB"></a>

```go
func SizeInGiB() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig</a>

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig">FsxLustreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FsxLustreConfig`<sup>Required</sup> <a name="FsxLustreConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.fsxLustreConfig"></a>

```go
func FsxLustreConfig() DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig</a>

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume">RootVolume</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.rootVolume"></a>

```go
func RootVolume() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig</a>

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig">EbsVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsVolumeConfig`<sup>Required</sup> <a name="EbsVolumeConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.ebsVolumeConfig"></a>

```go
func EbsVolumeConfig() DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs</a>

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsList <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsList" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterRestrictedInstanceGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount">CurrentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName">InstanceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs">InstanceStorageConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks">OnStartDeepHealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig">OverrideVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroups">DataAwsccSagemakerClusterRestrictedInstanceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentCount`<sup>Required</sup> <a name="CurrentCount" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.currentCount"></a>

```go
func CurrentCount() *f64
```

- *Type:* *f64

---

##### `EnvironmentConfig`<sup>Required</sup> <a name="EnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.environmentConfig"></a>

```go
func EnvironmentConfig() DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference</a>

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceGroupName`<sup>Required</sup> <a name="InstanceGroupName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceGroupName"></a>

```go
func InstanceGroupName() *string
```

- *Type:* *string

---

##### `InstanceStorageConfigs`<sup>Required</sup> <a name="InstanceStorageConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceStorageConfigs"></a>

```go
func InstanceStorageConfigs() DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList">DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `OnStartDeepHealthChecks`<sup>Required</sup> <a name="OnStartDeepHealthChecks" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.onStartDeepHealthChecks"></a>

```go
func OnStartDeepHealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `OverrideVpcConfig`<sup>Required</sup> <a name="OverrideVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.overrideVpcConfig"></a>

```go
func OverrideVpcConfig() DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference">DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference</a>

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.trainingPlanArn"></a>

```go
func TrainingPlanArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterRestrictedInstanceGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroups">DataAwsccSagemakerClusterRestrictedInstanceGroups</a>

---


### DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference <a name="DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig">DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig</a>

---


### DataAwsccSagemakerClusterTagsList <a name="DataAwsccSagemakerClusterTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterTagsOutputReference <a name="DataAwsccSagemakerClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTags">DataAwsccSagemakerClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTags">DataAwsccSagemakerClusterTags</a>

---


### DataAwsccSagemakerClusterTieredStorageConfigOutputReference <a name="DataAwsccSagemakerClusterTieredStorageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterTieredStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterTieredStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage">InstanceMemoryAllocationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfig">DataAwsccSagemakerClusterTieredStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceMemoryAllocationPercentage`<sup>Required</sup> <a name="InstanceMemoryAllocationPercentage" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.instanceMemoryAllocationPercentage"></a>

```go
func InstanceMemoryAllocationPercentage() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterTieredStorageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterTieredStorageConfig">DataAwsccSagemakerClusterTieredStorageConfig</a>

---


### DataAwsccSagemakerClusterVpcConfigOutputReference <a name="DataAwsccSagemakerClusterVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakercluster"

dataawsccsagemakercluster.NewDataAwsccSagemakerClusterVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfig">DataAwsccSagemakerClusterVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerCluster.DataAwsccSagemakerClusterVpcConfig">DataAwsccSagemakerClusterVpcConfig</a>

---



