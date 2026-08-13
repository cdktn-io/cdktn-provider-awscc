# `dataAwsccGroundstationDataflowEndpointGroupV2` Submodule <a name="`dataAwsccGroundstationDataflowEndpointGroupV2` Submodule" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGroundstationDataflowEndpointGroupV2 <a name="DataAwsccGroundstationDataflowEndpointGroupV2" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2(scope Construct, id *string, config DataAwsccGroundstationDataflowEndpointGroupV2Config) DataAwsccGroundstationDataflowEndpointGroupV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config">DataAwsccGroundstationDataflowEndpointGroupV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config">DataAwsccGroundstationDataflowEndpointGroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGroundstationDataflowEndpointGroupV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGroundstationDataflowEndpointGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_dataflow_endpoint_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGroundstationDataflowEndpointGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id">DataflowEndpointGroupV2Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList">DataAwsccGroundstationDataflowEndpointGroupV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds"></a>

```go
func ContactPostPassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds"></a>

```go
func ContactPrePassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `DataflowEndpointGroupV2Id`<sup>Required</sup> <a name="DataflowEndpointGroupV2Id" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id"></a>

```go
func DataflowEndpointGroupV2Id() *string
```

- *Type:* *string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.endpointDetails"></a>

```go
func EndpointDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList</a>

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.endpoints"></a>

```go
func Endpoints() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.tags"></a>

```go
func Tags() DataAwsccGroundstationDataflowEndpointGroupV2TagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList">DataAwsccGroundstationDataflowEndpointGroupV2TagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGroundstationDataflowEndpointGroupV2Config <a name="DataAwsccGroundstationDataflowEndpointGroupV2Config" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2Config {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_dataflow_endpoint_group_v2#id DataAwsccGroundstationDataflowEndpointGroupV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2Endpoints <a name="DataAwsccGroundstationDataflowEndpointGroupV2Endpoints" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Endpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Endpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2Endpoints {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupV2Tags <a name="DataAwsccGroundstationDataflowEndpointGroupV2Tags" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Tags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

&dataawsccgroundstationdataflowendpointgroupv2.DataAwsccGroundstationDataflowEndpointGroupV2Tags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `EgressAddressAndPort`<sup>Required</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```go
func EgressAddressAndPort() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```go
func AuditResults() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.get"></a>

```go
func Get(index *f64) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```go
func DownlinkAwsGroundStationAgentEndpoint() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```go
func UplinkAwsGroundStationAgentEndpoint() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `IngressAddressAndPort`<sup>Required</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```go
func IngressAddressAndPort() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```go
func AuditResults() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `EgressAddressAndPort`<sup>Required</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```go
func EgressAddressAndPort() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.get"></a>

```go
func Get(index *f64) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Endpoints">DataAwsccGroundstationDataflowEndpointGroupV2Endpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```go
func DownlinkAwsGroundStationAgentEndpoint() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```go
func UplinkAwsGroundStationAgentEndpoint() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2Endpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Endpoints">DataAwsccGroundstationDataflowEndpointGroupV2Endpoints</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `IngressAddressAndPort`<sup>Required</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```go
func IngressAddressAndPort() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---


### DataAwsccGroundstationDataflowEndpointGroupV2TagsList <a name="DataAwsccGroundstationDataflowEndpointGroupV2TagsList" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2TagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGroundstationDataflowEndpointGroupV2TagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.get"></a>

```go
func Get(index *f64) DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroupv2"

dataawsccgroundstationdataflowendpointgroupv2.NewDataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Tags">DataAwsccGroundstationDataflowEndpointGroupV2Tags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupV2Tags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroupV2.DataAwsccGroundstationDataflowEndpointGroupV2Tags">DataAwsccGroundstationDataflowEndpointGroupV2Tags</a>

---



