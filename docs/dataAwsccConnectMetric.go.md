# `dataAwsccConnectMetric` Submodule <a name="`dataAwsccConnectMetric` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectMetric <a name="DataAwsccConnectMetric" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric awscc_connect_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetric(scope Construct, id *string, config DataAwsccConnectMetricConfig) DataAwsccConnectMetric
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig">DataAwsccConnectMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig">DataAwsccConnectMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.DataAwsccConnectMetric_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.DataAwsccConnectMetric_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.DataAwsccConnectMetric_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.DataAwsccConnectMetric_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccConnectMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccConnectMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime">CreatedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser">CreatedUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod">CreationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime">EffectiveTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings">Groupings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser">LastModifiedUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn">MetricArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation">MetricCalculation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator">PositiveTrendIndicator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource">PrimaryEventSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType">PrimaryEventSourceEffectiveTimestampType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate">RefreshRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats">SupportedStats</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation">SupportsCustomCalculation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation">SupportsPreaggregateCalculation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime"></a>

```go
func CreatedTime() *f64
```

- *Type:* *f64

---

##### `CreatedUser`<sup>Required</sup> <a name="CreatedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser"></a>

```go
func CreatedUser() DataAwsccConnectMetricCreatedUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a>

---

##### `CreationMethod`<sup>Required</sup> <a name="CreationMethod" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod"></a>

```go
func CreationMethod() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime"></a>

```go
func EffectiveTime() *f64
```

- *Type:* *f64

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters"></a>

```go
func Filters() DataAwsccConnectMetricFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a>

---

##### `Groupings`<sup>Required</sup> <a name="Groupings" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings"></a>

```go
func Groupings() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion"></a>

```go
func LastModifiedRegion() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `LastModifiedUser`<sup>Required</sup> <a name="LastModifiedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser"></a>

```go
func LastModifiedUser() DataAwsccConnectMetricLastModifiedUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a>

---

##### `MetricArn`<sup>Required</sup> <a name="MetricArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn"></a>

```go
func MetricArn() *string
```

- *Type:* *string

---

##### `MetricCalculation`<sup>Required</sup> <a name="MetricCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation"></a>

```go
func MetricCalculation() DataAwsccConnectMetricMetricCalculationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PositiveTrendIndicator`<sup>Required</sup> <a name="PositiveTrendIndicator" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator"></a>

```go
func PositiveTrendIndicator() *string
```

- *Type:* *string

---

##### `PrimaryEventSource`<sup>Required</sup> <a name="PrimaryEventSource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource"></a>

```go
func PrimaryEventSource() *string
```

- *Type:* *string

---

##### `PrimaryEventSourceEffectiveTimestampType`<sup>Required</sup> <a name="PrimaryEventSourceEffectiveTimestampType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType"></a>

```go
func PrimaryEventSourceEffectiveTimestampType() *string
```

- *Type:* *string

---

##### `RefreshRate`<sup>Required</sup> <a name="RefreshRate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate"></a>

```go
func RefreshRate() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportedStats`<sup>Required</sup> <a name="SupportedStats" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats"></a>

```go
func SupportedStats() *[]*string
```

- *Type:* *[]*string

---

##### `SupportsCustomCalculation`<sup>Required</sup> <a name="SupportsCustomCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation"></a>

```go
func SupportsCustomCalculation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportsPreaggregateCalculation`<sup>Required</sup> <a name="SupportsPreaggregateCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation"></a>

```go
func SupportsPreaggregateCalculation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags"></a>

```go
func Tags() DataAwsccConnectMetricTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectMetricConfig <a name="DataAwsccConnectMetricConfig" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_metric#id DataAwsccConnectMetric#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectMetricCreatedUser <a name="DataAwsccConnectMetricCreatedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricCreatedUser {

}
```


### DataAwsccConnectMetricFilters <a name="DataAwsccConnectMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricFilters {

}
```


### DataAwsccConnectMetricLastModifiedUser <a name="DataAwsccConnectMetricLastModifiedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricLastModifiedUser {

}
```


### DataAwsccConnectMetricMetricCalculation <a name="DataAwsccConnectMetricMetricCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricMetricCalculation {

}
```


### DataAwsccConnectMetricMetricCalculationCalculationComponents <a name="DataAwsccConnectMetricMetricCalculationCalculationComponents" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricMetricCalculationCalculationComponents {

}
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters {

}
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition {

}
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition {

}
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition {

}
```


### DataAwsccConnectMetricTags <a name="DataAwsccConnectMetricTags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

&dataawsccconnectmetric.DataAwsccConnectMetricTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectMetricCreatedUserOutputReference <a name="DataAwsccConnectMetricCreatedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricCreatedUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectMetricCreatedUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn">AwsIdentityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn">ConnectUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsIdentityArn`<sup>Required</sup> <a name="AwsIdentityArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn"></a>

```go
func AwsIdentityArn() *string
```

- *Type:* *string

---

##### `ConnectUserArn`<sup>Required</sup> <a name="ConnectUserArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn"></a>

```go
func ConnectUserArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricCreatedUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a>

---


### DataAwsccConnectMetricFiltersList <a name="DataAwsccConnectMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectMetricFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get"></a>

```go
func Get(index *f64) DataAwsccConnectMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectMetricFiltersOutputReference <a name="DataAwsccConnectMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectMetricFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a>

---


### DataAwsccConnectMetricLastModifiedUserOutputReference <a name="DataAwsccConnectMetricLastModifiedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricLastModifiedUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectMetricLastModifiedUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn">AwsIdentityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn">ConnectUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsIdentityArn`<sup>Required</sup> <a name="AwsIdentityArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn"></a>

```go
func AwsIdentityArn() *string
```

- *Type:* *string

---

##### `ConnectUserArn`<sup>Required</sup> <a name="ConnectUserArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn"></a>

```go
func ConnectUserArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricLastModifiedUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationCalculationComponentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectMetricMetricCalculationCalculationComponentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get"></a>

```go
func Get(index *f64) DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition">BooleanCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey">MetricFilterKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate">Negate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition">NumberCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition">StringCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanCondition`<sup>Required</sup> <a name="BooleanCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition"></a>

```go
func BooleanCondition() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a>

---

##### `MetricFilterKey`<sup>Required</sup> <a name="MetricFilterKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey"></a>

```go
func MetricFilterKey() *string
```

- *Type:* *string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate"></a>

```go
func Negate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NumberCondition`<sup>Required</sup> <a name="NumberCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition"></a>

```go
func NumberCondition() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a>

---

##### `StringCondition`<sup>Required</sup> <a name="StringCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition"></a>

```go
func StringCondition() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters">MetricFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId">MetricId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `MetricFilters`<sup>Required</sup> <a name="MetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters"></a>

```go
func MetricFilters() DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a>

---

##### `MetricId`<sup>Required</sup> <a name="MetricId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId"></a>

```go
func MetricId() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricMetricCalculationCalculationComponents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a>

---


### DataAwsccConnectMetricMetricCalculationOutputReference <a name="DataAwsccConnectMetricMetricCalculationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricMetricCalculationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectMetricMetricCalculationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation">Calculation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents">CalculationComponents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Calculation`<sup>Required</sup> <a name="Calculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation"></a>

```go
func Calculation() *string
```

- *Type:* *string

---

##### `CalculationComponents`<sup>Required</sup> <a name="CalculationComponents" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents"></a>

```go
func CalculationComponents() DataAwsccConnectMetricMetricCalculationCalculationComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricMetricCalculation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a>

---


### DataAwsccConnectMetricTagsList <a name="DataAwsccConnectMetricTagsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConnectMetricTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get"></a>

```go
func Get(index *f64) DataAwsccConnectMetricTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConnectMetricTagsOutputReference <a name="DataAwsccConnectMetricTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectmetric"

dataawsccconnectmetric.NewDataAwsccConnectMetricTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConnectMetricTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectMetricTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a>

---



