# `dataAwsccOdbCloudExadataInfrastructure` Submodule <a name="`dataAwsccOdbCloudExadataInfrastructure` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbCloudExadataInfrastructure <a name="DataAwsccOdbCloudExadataInfrastructure" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.NewDataAwsccOdbCloudExadataInfrastructure(scope Construct, id *string, config DataAwsccOdbCloudExadataInfrastructureConfig) DataAwsccOdbCloudExadataInfrastructure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig">DataAwsccOdbCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig">DataAwsccOdbCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructure_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccOdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccOdbCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccOdbCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availableStorageSizeInGBs">AvailableStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn">CloudExadataInfrastructureArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.databaseServerType">DatabaseServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerIds">DbServerIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerVersion">DbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxCpuCount">MaxCpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDataStorageInTBs">MaxDataStorageInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs">MaxDbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxMemoryInGBs">MaxMemoryInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageCount">StorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerType">StorageServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerVersion">StorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList">DataAwsccOdbCloudExadataInfrastructureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.totalStorageSizeInGBs">TotalStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.activatedStorageCount"></a>

```go
func ActivatedStorageCount() *f64
```

- *Type:* *f64

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.additionalStorageCount"></a>

```go
func AdditionalStorageCount() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `AvailableStorageSizeInGBs`<sup>Required</sup> <a name="AvailableStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availableStorageSizeInGBs"></a>

```go
func AvailableStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `CloudExadataInfrastructureArn`<sup>Required</sup> <a name="CloudExadataInfrastructureArn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn"></a>

```go
func CloudExadataInfrastructureArn() *string
```

- *Type:* *string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```go
func CloudExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `CustomerContactsToSendToOci`<sup>Required</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.customerContactsToSendToOci"></a>

```go
func CustomerContactsToSendToOci() DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a>

---

##### `DatabaseServerType`<sup>Required</sup> <a name="DatabaseServerType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.databaseServerType"></a>

```go
func DatabaseServerType() *string
```

- *Type:* *string

---

##### `DataStorageSizeInTBs`<sup>Required</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dataStorageSizeInTBs"></a>

```go
func DataStorageSizeInTBs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs"></a>

```go
func DbNodeStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `DbServerIds`<sup>Required</sup> <a name="DbServerIds" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerIds"></a>

```go
func DbServerIds() *[]*string
```

- *Type:* *[]*string

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerVersion"></a>

```go
func DbServerVersion() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxCpuCount"></a>

```go
func MaxCpuCount() *f64
```

- *Type:* *f64

---

##### `MaxDataStorageInTBs`<sup>Required</sup> <a name="MaxDataStorageInTBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDataStorageInTBs"></a>

```go
func MaxDataStorageInTBs() *f64
```

- *Type:* *f64

---

##### `MaxDbNodeStorageSizeInGBs`<sup>Required</sup> <a name="MaxDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs"></a>

```go
func MaxDbNodeStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `MaxMemoryInGBs`<sup>Required</sup> <a name="MaxMemoryInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxMemoryInGBs"></a>

```go
func MaxMemoryInGBs() *f64
```

- *Type:* *f64

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.memorySizeInGBs"></a>

```go
func MemorySizeInGBs() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociResourceAnchorName"></a>

```go
func OciResourceAnchorName() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageCount"></a>

```go
func StorageCount() *f64
```

- *Type:* *f64

---

##### `StorageServerType`<sup>Required</sup> <a name="StorageServerType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerType"></a>

```go
func StorageServerType() *string
```

- *Type:* *string

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerVersion"></a>

```go
func StorageServerVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tags"></a>

```go
func Tags() DataAwsccOdbCloudExadataInfrastructureTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList">DataAwsccOdbCloudExadataInfrastructureTagsList</a>

---

##### `TotalStorageSizeInGBs`<sup>Required</sup> <a name="TotalStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.totalStorageSizeInGBs"></a>

```go
func TotalStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbCloudExadataInfrastructureConfig <a name="DataAwsccOdbCloudExadataInfrastructureConfig" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

&dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_cloud_exadata_infrastructure#id DataAwsccOdbCloudExadataInfrastructure#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci <a name="DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

&dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci {

}
```


### DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow <a name="DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

&dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow {

}
```


### DataAwsccOdbCloudExadataInfrastructureTags <a name="DataAwsccOdbCloudExadataInfrastructureTags" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

&dataawsccodbcloudexadatainfrastructure.DataAwsccOdbCloudExadataInfrastructureTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList <a name="DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.NewDataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get"></a>

```go
func Get(index *f64) DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference <a name="DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.NewDataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>

---


### DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference <a name="DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.NewDataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months">Months</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```go
func CustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() *[]*string
```

- *Type:* *[]*string

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow</a>

---


### DataAwsccOdbCloudExadataInfrastructureTagsList <a name="DataAwsccOdbCloudExadataInfrastructureTagsList" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.NewDataAwsccOdbCloudExadataInfrastructureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOdbCloudExadataInfrastructureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.get"></a>

```go
func Get(index *f64) DataAwsccOdbCloudExadataInfrastructureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOdbCloudExadataInfrastructureTagsOutputReference <a name="DataAwsccOdbCloudExadataInfrastructureTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccodbcloudexadatainfrastructure"

dataawsccodbcloudexadatainfrastructure.NewDataAwsccOdbCloudExadataInfrastructureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOdbCloudExadataInfrastructureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags">DataAwsccOdbCloudExadataInfrastructureTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOdbCloudExadataInfrastructureTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags">DataAwsccOdbCloudExadataInfrastructureTags</a>

---



