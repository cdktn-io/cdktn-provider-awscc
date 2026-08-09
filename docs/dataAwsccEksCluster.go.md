# `dataAwsccEksCluster` Submodule <a name="`dataAwsccEksCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccEksCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksCluster <a name="DataAwsccEksCluster" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_cluster awscc_eks_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksCluster(scope Construct, id *string, config DataAwsccEksClusterConfig) DataAwsccEksCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig">DataAwsccEksClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig">DataAwsccEksClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEksCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.DataAwsccEksCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.DataAwsccEksCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.DataAwsccEksCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.DataAwsccEksCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEksCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEksCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEksCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference">DataAwsccEksClusterAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.bootstrapSelfManagedAddons">BootstrapSelfManagedAddons</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.certificateAuthorityData">CertificateAuthorityData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.clusterSecurityGroupId">ClusterSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference">DataAwsccEksClusterComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.controlPlaneScalingConfig">ControlPlaneScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference">DataAwsccEksClusterControlPlaneScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList">DataAwsccEksClusterEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.encryptionConfigKeyArn">EncryptionConfigKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.force">Force</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.kubernetesNetworkConfig">KubernetesNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference">DataAwsccEksClusterKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference">DataAwsccEksClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.openIdConnectIssuerUrl">OpenIdConnectIssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.outpostConfig">OutpostConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference">DataAwsccEksClusterOutpostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.remoteNetworkConfig">RemoteNetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference">DataAwsccEksClusterRemoteNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.resourcesVpcConfig">ResourcesVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference">DataAwsccEksClusterResourcesVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.rollbackConfig">RollbackConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference">DataAwsccEksClusterRollbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference">DataAwsccEksClusterStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList">DataAwsccEksClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.upgradePolicy">UpgradePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference">DataAwsccEksClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.zonalShiftConfig">ZonalShiftConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference">DataAwsccEksClusterZonalShiftConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.accessConfig"></a>

```go
func AccessConfig() DataAwsccEksClusterAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference">DataAwsccEksClusterAccessConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BootstrapSelfManagedAddons`<sup>Required</sup> <a name="BootstrapSelfManagedAddons" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.bootstrapSelfManagedAddons"></a>

```go
func BootstrapSelfManagedAddons() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CertificateAuthorityData`<sup>Required</sup> <a name="CertificateAuthorityData" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.certificateAuthorityData"></a>

```go
func CertificateAuthorityData() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterSecurityGroupId`<sup>Required</sup> <a name="ClusterSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.clusterSecurityGroupId"></a>

```go
func ClusterSecurityGroupId() *string
```

- *Type:* *string

---

##### `ComputeConfig`<sup>Required</sup> <a name="ComputeConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.computeConfig"></a>

```go
func ComputeConfig() DataAwsccEksClusterComputeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference">DataAwsccEksClusterComputeConfigOutputReference</a>

---

##### `ControlPlaneScalingConfig`<sup>Required</sup> <a name="ControlPlaneScalingConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.controlPlaneScalingConfig"></a>

```go
func ControlPlaneScalingConfig() DataAwsccEksClusterControlPlaneScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference">DataAwsccEksClusterControlPlaneScalingConfigOutputReference</a>

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.encryptionConfig"></a>

```go
func EncryptionConfig() DataAwsccEksClusterEncryptionConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList">DataAwsccEksClusterEncryptionConfigList</a>

---

##### `EncryptionConfigKeyArn`<sup>Required</sup> <a name="EncryptionConfigKeyArn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.encryptionConfigKeyArn"></a>

```go
func EncryptionConfigKeyArn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.force"></a>

```go
func Force() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KubernetesNetworkConfig`<sup>Required</sup> <a name="KubernetesNetworkConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.kubernetesNetworkConfig"></a>

```go
func KubernetesNetworkConfig() DataAwsccEksClusterKubernetesNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference">DataAwsccEksClusterKubernetesNetworkConfigOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.logging"></a>

```go
func Logging() DataAwsccEksClusterLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference">DataAwsccEksClusterLoggingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenIdConnectIssuerUrl`<sup>Required</sup> <a name="OpenIdConnectIssuerUrl" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.openIdConnectIssuerUrl"></a>

```go
func OpenIdConnectIssuerUrl() *string
```

- *Type:* *string

---

##### `OutpostConfig`<sup>Required</sup> <a name="OutpostConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.outpostConfig"></a>

```go
func OutpostConfig() DataAwsccEksClusterOutpostConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference">DataAwsccEksClusterOutpostConfigOutputReference</a>

---

##### `RemoteNetworkConfig`<sup>Required</sup> <a name="RemoteNetworkConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.remoteNetworkConfig"></a>

```go
func RemoteNetworkConfig() DataAwsccEksClusterRemoteNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference">DataAwsccEksClusterRemoteNetworkConfigOutputReference</a>

---

##### `ResourcesVpcConfig`<sup>Required</sup> <a name="ResourcesVpcConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.resourcesVpcConfig"></a>

```go
func ResourcesVpcConfig() DataAwsccEksClusterResourcesVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference">DataAwsccEksClusterResourcesVpcConfigOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RollbackConfig`<sup>Required</sup> <a name="RollbackConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.rollbackConfig"></a>

```go
func RollbackConfig() DataAwsccEksClusterRollbackConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference">DataAwsccEksClusterRollbackConfigOutputReference</a>

---

##### `StorageConfig`<sup>Required</sup> <a name="StorageConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.storageConfig"></a>

```go
func StorageConfig() DataAwsccEksClusterStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference">DataAwsccEksClusterStorageConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.tags"></a>

```go
func Tags() DataAwsccEksClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList">DataAwsccEksClusterTagsList</a>

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.upgradePolicy"></a>

```go
func UpgradePolicy() DataAwsccEksClusterUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference">DataAwsccEksClusterUpgradePolicyOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ZonalShiftConfig`<sup>Required</sup> <a name="ZonalShiftConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.zonalShiftConfig"></a>

```go
func ZonalShiftConfig() DataAwsccEksClusterZonalShiftConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference">DataAwsccEksClusterZonalShiftConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksClusterAccessConfig <a name="DataAwsccEksClusterAccessConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterAccessConfig {

}
```


### DataAwsccEksClusterComputeConfig <a name="DataAwsccEksClusterComputeConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterComputeConfig {

}
```


### DataAwsccEksClusterConfig <a name="DataAwsccEksClusterConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/eks_cluster#id DataAwsccEksCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksClusterControlPlaneScalingConfig <a name="DataAwsccEksClusterControlPlaneScalingConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterControlPlaneScalingConfig {

}
```


### DataAwsccEksClusterEncryptionConfig <a name="DataAwsccEksClusterEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterEncryptionConfig {

}
```


### DataAwsccEksClusterEncryptionConfigProvider <a name="DataAwsccEksClusterEncryptionConfigProvider" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterEncryptionConfigProvider {

}
```


### DataAwsccEksClusterKubernetesNetworkConfig <a name="DataAwsccEksClusterKubernetesNetworkConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterKubernetesNetworkConfig {

}
```


### DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing <a name="DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing {

}
```


### DataAwsccEksClusterLogging <a name="DataAwsccEksClusterLogging" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterLogging {

}
```


### DataAwsccEksClusterLoggingClusterLogging <a name="DataAwsccEksClusterLoggingClusterLogging" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterLoggingClusterLogging {

}
```


### DataAwsccEksClusterLoggingClusterLoggingEnabledTypes <a name="DataAwsccEksClusterLoggingClusterLoggingEnabledTypes" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypes {

}
```


### DataAwsccEksClusterOutpostConfig <a name="DataAwsccEksClusterOutpostConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterOutpostConfig {

}
```


### DataAwsccEksClusterOutpostConfigControlPlanePlacement <a name="DataAwsccEksClusterOutpostConfigControlPlanePlacement" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterOutpostConfigControlPlanePlacement {

}
```


### DataAwsccEksClusterOutpostConfigEtcdPlacement <a name="DataAwsccEksClusterOutpostConfigEtcdPlacement" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterOutpostConfigEtcdPlacement {

}
```


### DataAwsccEksClusterRemoteNetworkConfig <a name="DataAwsccEksClusterRemoteNetworkConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterRemoteNetworkConfig {

}
```


### DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks <a name="DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks {

}
```


### DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks <a name="DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks {

}
```


### DataAwsccEksClusterResourcesVpcConfig <a name="DataAwsccEksClusterResourcesVpcConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterResourcesVpcConfig {

}
```


### DataAwsccEksClusterRollbackConfig <a name="DataAwsccEksClusterRollbackConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterRollbackConfig {

}
```


### DataAwsccEksClusterStorageConfig <a name="DataAwsccEksClusterStorageConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterStorageConfig {

}
```


### DataAwsccEksClusterStorageConfigBlockStorage <a name="DataAwsccEksClusterStorageConfigBlockStorage" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterStorageConfigBlockStorage {

}
```


### DataAwsccEksClusterTags <a name="DataAwsccEksClusterTags" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterTags {

}
```


### DataAwsccEksClusterUpgradePolicy <a name="DataAwsccEksClusterUpgradePolicy" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterUpgradePolicy {

}
```


### DataAwsccEksClusterZonalShiftConfig <a name="DataAwsccEksClusterZonalShiftConfig" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

&dataawsccekscluster.DataAwsccEksClusterZonalShiftConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksClusterAccessConfigOutputReference <a name="DataAwsccEksClusterAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions">BootstrapClusterCreatorAdminPermissions</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfig">DataAwsccEksClusterAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.authenticationMode"></a>

```go
func AuthenticationMode() *string
```

- *Type:* *string

---

##### `BootstrapClusterCreatorAdminPermissions`<sup>Required</sup> <a name="BootstrapClusterCreatorAdminPermissions" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.bootstrapClusterCreatorAdminPermissions"></a>

```go
func BootstrapClusterCreatorAdminPermissions() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterAccessConfig">DataAwsccEksClusterAccessConfig</a>

---


### DataAwsccEksClusterComputeConfigOutputReference <a name="DataAwsccEksClusterComputeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterComputeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterComputeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.nodePools">NodePools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.nodeRoleArn">NodeRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfig">DataAwsccEksClusterComputeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NodePools`<sup>Required</sup> <a name="NodePools" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.nodePools"></a>

```go
func NodePools() *[]*string
```

- *Type:* *[]*string

---

##### `NodeRoleArn`<sup>Required</sup> <a name="NodeRoleArn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.nodeRoleArn"></a>

```go
func NodeRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterComputeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterComputeConfig">DataAwsccEksClusterComputeConfig</a>

---


### DataAwsccEksClusterControlPlaneScalingConfigOutputReference <a name="DataAwsccEksClusterControlPlaneScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterControlPlaneScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterControlPlaneScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfig">DataAwsccEksClusterControlPlaneScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterControlPlaneScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterControlPlaneScalingConfig">DataAwsccEksClusterControlPlaneScalingConfig</a>

---


### DataAwsccEksClusterEncryptionConfigList <a name="DataAwsccEksClusterEncryptionConfigList" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterEncryptionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksClusterEncryptionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.get"></a>

```go
func Get(index *f64) DataAwsccEksClusterEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksClusterEncryptionConfigOutputReference <a name="DataAwsccEksClusterEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksClusterEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference">DataAwsccEksClusterEncryptionConfigProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfig">DataAwsccEksClusterEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.provider"></a>

```go
func Provider() DataAwsccEksClusterEncryptionConfigProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference">DataAwsccEksClusterEncryptionConfigProviderOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfig">DataAwsccEksClusterEncryptionConfig</a>

---


### DataAwsccEksClusterEncryptionConfigProviderOutputReference <a name="DataAwsccEksClusterEncryptionConfigProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterEncryptionConfigProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterEncryptionConfigProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProvider">DataAwsccEksClusterEncryptionConfigProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterEncryptionConfigProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterEncryptionConfigProvider">DataAwsccEksClusterEncryptionConfigProvider</a>

---


### DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference <a name="DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing">DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing">DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancing</a>

---


### DataAwsccEksClusterKubernetesNetworkConfigOutputReference <a name="DataAwsccEksClusterKubernetesNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterKubernetesNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterKubernetesNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing">ElasticLoadBalancing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.ipFamily">IpFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr">ServiceIpv4Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr">ServiceIpv6Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfig">DataAwsccEksClusterKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElasticLoadBalancing`<sup>Required</sup> <a name="ElasticLoadBalancing" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.elasticLoadBalancing"></a>

```go
func ElasticLoadBalancing() DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference">DataAwsccEksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference</a>

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.ipFamily"></a>

```go
func IpFamily() *string
```

- *Type:* *string

---

##### `ServiceIpv4Cidr`<sup>Required</sup> <a name="ServiceIpv4Cidr" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv4Cidr"></a>

```go
func ServiceIpv4Cidr() *string
```

- *Type:* *string

---

##### `ServiceIpv6Cidr`<sup>Required</sup> <a name="ServiceIpv6Cidr" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.serviceIpv6Cidr"></a>

```go
func ServiceIpv6Cidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterKubernetesNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterKubernetesNetworkConfig">DataAwsccEksClusterKubernetesNetworkConfig</a>

---


### DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList <a name="DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterLoggingClusterLoggingEnabledTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.get"></a>

```go
func Get(index *f64) DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference <a name="DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypes">DataAwsccEksClusterLoggingClusterLoggingEnabledTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterLoggingClusterLoggingEnabledTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypes">DataAwsccEksClusterLoggingClusterLoggingEnabledTypes</a>

---


### DataAwsccEksClusterLoggingClusterLoggingOutputReference <a name="DataAwsccEksClusterLoggingClusterLoggingOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterLoggingClusterLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterLoggingClusterLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.enabledTypes">EnabledTypes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList">DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLogging">DataAwsccEksClusterLoggingClusterLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledTypes`<sup>Required</sup> <a name="EnabledTypes" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.enabledTypes"></a>

```go
func EnabledTypes() DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList">DataAwsccEksClusterLoggingClusterLoggingEnabledTypesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterLoggingClusterLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLogging">DataAwsccEksClusterLoggingClusterLogging</a>

---


### DataAwsccEksClusterLoggingOutputReference <a name="DataAwsccEksClusterLoggingOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.clusterLogging">ClusterLogging</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference">DataAwsccEksClusterLoggingClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLogging">DataAwsccEksClusterLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterLogging`<sup>Required</sup> <a name="ClusterLogging" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.clusterLogging"></a>

```go
func ClusterLogging() DataAwsccEksClusterLoggingClusterLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingClusterLoggingOutputReference">DataAwsccEksClusterLoggingClusterLoggingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterLogging">DataAwsccEksClusterLogging</a>

---


### DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference <a name="DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel">SpreadLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacement">DataAwsccEksClusterOutpostConfigControlPlanePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `SpreadLevel`<sup>Required</sup> <a name="SpreadLevel" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.spreadLevel"></a>

```go
func SpreadLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterOutpostConfigControlPlanePlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacement">DataAwsccEksClusterOutpostConfigControlPlanePlacement</a>

---


### DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference <a name="DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel">SpreadLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacement">DataAwsccEksClusterOutpostConfigEtcdPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpreadLevel`<sup>Required</sup> <a name="SpreadLevel" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.spreadLevel"></a>

```go
func SpreadLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterOutpostConfigEtcdPlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacement">DataAwsccEksClusterOutpostConfigEtcdPlacement</a>

---


### DataAwsccEksClusterOutpostConfigOutputReference <a name="DataAwsccEksClusterOutpostConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterOutpostConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterOutpostConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType">ControlPlaneInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.controlPlanePlacement">ControlPlanePlacement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference">DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.etcdInstanceType">EtcdInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.etcdPlacement">EtcdPlacement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference">DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.outpostArns">OutpostArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfig">DataAwsccEksClusterOutpostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneInstanceType`<sup>Required</sup> <a name="ControlPlaneInstanceType" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.controlPlaneInstanceType"></a>

```go
func ControlPlaneInstanceType() *string
```

- *Type:* *string

---

##### `ControlPlanePlacement`<sup>Required</sup> <a name="ControlPlanePlacement" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.controlPlanePlacement"></a>

```go
func ControlPlanePlacement() DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference">DataAwsccEksClusterOutpostConfigControlPlanePlacementOutputReference</a>

---

##### `EtcdInstanceType`<sup>Required</sup> <a name="EtcdInstanceType" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.etcdInstanceType"></a>

```go
func EtcdInstanceType() *string
```

- *Type:* *string

---

##### `EtcdPlacement`<sup>Required</sup> <a name="EtcdPlacement" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.etcdPlacement"></a>

```go
func EtcdPlacement() DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference">DataAwsccEksClusterOutpostConfigEtcdPlacementOutputReference</a>

---

##### `OutpostArns`<sup>Required</sup> <a name="OutpostArns" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.outpostArns"></a>

```go
func OutpostArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterOutpostConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterOutpostConfig">DataAwsccEksClusterOutpostConfig</a>

---


### DataAwsccEksClusterRemoteNetworkConfigOutputReference <a name="DataAwsccEksClusterRemoteNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterRemoteNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterRemoteNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks">RemoteNodeNetworks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList">DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks">RemotePodNetworks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList">DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfig">DataAwsccEksClusterRemoteNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RemoteNodeNetworks`<sup>Required</sup> <a name="RemoteNodeNetworks" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.remoteNodeNetworks"></a>

```go
func RemoteNodeNetworks() DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList">DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList</a>

---

##### `RemotePodNetworks`<sup>Required</sup> <a name="RemotePodNetworks" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.remotePodNetworks"></a>

```go
func RemotePodNetworks() DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList">DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterRemoteNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfig">DataAwsccEksClusterRemoteNetworkConfig</a>

---


### DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList <a name="DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.get"></a>

```go
func Get(index *f64) DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference <a name="DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks">DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks">DataAwsccEksClusterRemoteNetworkConfigRemoteNodeNetworks</a>

---


### DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList <a name="DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.get"></a>

```go
func Get(index *f64) DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference <a name="DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks">DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks">DataAwsccEksClusterRemoteNetworkConfigRemotePodNetworks</a>

---


### DataAwsccEksClusterResourcesVpcConfigOutputReference <a name="DataAwsccEksClusterResourcesVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterResourcesVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterResourcesVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressMode">ControlPlaneEgressMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccess">EndpointPrivateAccess</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccess">EndpointPublicAccess</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrs">PublicAccessCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfig">DataAwsccEksClusterResourcesVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneEgressMode`<sup>Required</sup> <a name="ControlPlaneEgressMode" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.controlPlaneEgressMode"></a>

```go
func ControlPlaneEgressMode() *string
```

- *Type:* *string

---

##### `EndpointPrivateAccess`<sup>Required</sup> <a name="EndpointPrivateAccess" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.endpointPrivateAccess"></a>

```go
func EndpointPrivateAccess() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EndpointPublicAccess`<sup>Required</sup> <a name="EndpointPublicAccess" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.endpointPublicAccess"></a>

```go
func EndpointPublicAccess() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PublicAccessCidrs`<sup>Required</sup> <a name="PublicAccessCidrs" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.publicAccessCidrs"></a>

```go
func PublicAccessCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterResourcesVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterResourcesVpcConfig">DataAwsccEksClusterResourcesVpcConfig</a>

---


### DataAwsccEksClusterRollbackConfigOutputReference <a name="DataAwsccEksClusterRollbackConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterRollbackConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterRollbackConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfig">DataAwsccEksClusterRollbackConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeoutMinutes`<sup>Required</sup> <a name="TimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.timeoutMinutes"></a>

```go
func TimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterRollbackConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterRollbackConfig">DataAwsccEksClusterRollbackConfig</a>

---


### DataAwsccEksClusterStorageConfigBlockStorageOutputReference <a name="DataAwsccEksClusterStorageConfigBlockStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterStorageConfigBlockStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterStorageConfigBlockStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorage">DataAwsccEksClusterStorageConfigBlockStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterStorageConfigBlockStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorage">DataAwsccEksClusterStorageConfigBlockStorage</a>

---


### DataAwsccEksClusterStorageConfigOutputReference <a name="DataAwsccEksClusterStorageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.blockStorage">BlockStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference">DataAwsccEksClusterStorageConfigBlockStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfig">DataAwsccEksClusterStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockStorage`<sup>Required</sup> <a name="BlockStorage" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.blockStorage"></a>

```go
func BlockStorage() DataAwsccEksClusterStorageConfigBlockStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigBlockStorageOutputReference">DataAwsccEksClusterStorageConfigBlockStorageOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterStorageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterStorageConfig">DataAwsccEksClusterStorageConfig</a>

---


### DataAwsccEksClusterTagsList <a name="DataAwsccEksClusterTagsList" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEksClusterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEksClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEksClusterTagsOutputReference <a name="DataAwsccEksClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEksClusterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTags">DataAwsccEksClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterTags">DataAwsccEksClusterTags</a>

---


### DataAwsccEksClusterUpgradePolicyOutputReference <a name="DataAwsccEksClusterUpgradePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterUpgradePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterUpgradePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.supportType">SupportType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicy">DataAwsccEksClusterUpgradePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SupportType`<sup>Required</sup> <a name="SupportType" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.supportType"></a>

```go
func SupportType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterUpgradePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterUpgradePolicy">DataAwsccEksClusterUpgradePolicy</a>

---


### DataAwsccEksClusterZonalShiftConfigOutputReference <a name="DataAwsccEksClusterZonalShiftConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccekscluster"

dataawsccekscluster.NewDataAwsccEksClusterZonalShiftConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEksClusterZonalShiftConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfig">DataAwsccEksClusterZonalShiftConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEksClusterZonalShiftConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCluster.DataAwsccEksClusterZonalShiftConfig">DataAwsccEksClusterZonalShiftConfig</a>

---



