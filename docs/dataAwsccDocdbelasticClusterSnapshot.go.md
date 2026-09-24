# `dataAwsccDocdbelasticClusterSnapshot` Submodule <a name="`dataAwsccDocdbelasticClusterSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDocdbelasticClusterSnapshot <a name="DataAwsccDocdbelasticClusterSnapshot" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot awscc_docdbelastic_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

dataawsccdocdbelasticclustersnapshot.NewDataAwsccDocdbelasticClusterSnapshot(scope Construct, id *string, config DataAwsccDocdbelasticClusterSnapshotConfig) DataAwsccDocdbelasticClusterSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig">DataAwsccDocdbelasticClusterSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig">DataAwsccDocdbelasticClusterSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

dataawsccdocdbelasticclustersnapshot.DataAwsccDocdbelasticClusterSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

dataawsccdocdbelasticclustersnapshot.DataAwsccDocdbelasticClusterSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

dataawsccdocdbelasticclustersnapshot.DataAwsccDocdbelasticClusterSnapshot_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

dataawsccdocdbelasticclustersnapshot.DataAwsccDocdbelasticClusterSnapshot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDocdbelasticClusterSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDocdbelasticClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDocdbelasticClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.adminUserName">AdminUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterCreationTime">ClusterCreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotCreationTime">SnapshotCreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList">DataAwsccDocdbelasticClusterSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdminUserName`<sup>Required</sup> <a name="AdminUserName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.adminUserName"></a>

```go
func AdminUserName() *string
```

- *Type:* *string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `ClusterCreationTime`<sup>Required</sup> <a name="ClusterCreationTime" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.clusterCreationTime"></a>

```go
func ClusterCreationTime() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotArn"></a>

```go
func SnapshotArn() *string
```

- *Type:* *string

---

##### `SnapshotCreationTime`<sup>Required</sup> <a name="SnapshotCreationTime" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotCreationTime"></a>

```go
func SnapshotCreationTime() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.snapshotType"></a>

```go
func SnapshotType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tags"></a>

```go
func Tags() DataAwsccDocdbelasticClusterSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList">DataAwsccDocdbelasticClusterSnapshotTagsList</a>

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDocdbelasticClusterSnapshotConfig <a name="DataAwsccDocdbelasticClusterSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

&dataawsccdocdbelasticclustersnapshot.DataAwsccDocdbelasticClusterSnapshotConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/docdbelastic_cluster_snapshot#id DataAwsccDocdbelasticClusterSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDocdbelasticClusterSnapshotTags <a name="DataAwsccDocdbelasticClusterSnapshotTags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

&dataawsccdocdbelasticclustersnapshot.DataAwsccDocdbelasticClusterSnapshotTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDocdbelasticClusterSnapshotTagsList <a name="DataAwsccDocdbelasticClusterSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

dataawsccdocdbelasticclustersnapshot.NewDataAwsccDocdbelasticClusterSnapshotTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDocdbelasticClusterSnapshotTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDocdbelasticClusterSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDocdbelasticClusterSnapshotTagsOutputReference <a name="DataAwsccDocdbelasticClusterSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdocdbelasticclustersnapshot"

dataawsccdocdbelasticclustersnapshot.NewDataAwsccDocdbelasticClusterSnapshotTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDocdbelasticClusterSnapshotTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags">DataAwsccDocdbelasticClusterSnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDocdbelasticClusterSnapshotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticClusterSnapshot.DataAwsccDocdbelasticClusterSnapshotTags">DataAwsccDocdbelasticClusterSnapshotTags</a>

---



