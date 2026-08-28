# `dataAwsccGroundstationDataflowEndpointGroup` Submodule <a name="`dataAwsccGroundstationDataflowEndpointGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGroundstationDataflowEndpointGroup <a name="DataAwsccGroundstationDataflowEndpointGroup" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroup(scope Construct, id *string, config DataAwsccGroundstationDataflowEndpointGroupConfig) DataAwsccGroundstationDataflowEndpointGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig">DataAwsccGroundstationDataflowEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig">DataAwsccGroundstationDataflowEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGroundstationDataflowEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGroundstationDataflowEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/groundstation_dataflow_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGroundstationDataflowEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId">DataflowEndpointGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList">DataAwsccGroundstationDataflowEndpointGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds"></a>

```go
func ContactPostPassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds"></a>

```go
func ContactPrePassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `DataflowEndpointGroupId`<sup>Required</sup> <a name="DataflowEndpointGroupId" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId"></a>

```go
func DataflowEndpointGroupId() *string
```

- *Type:* *string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.endpointDetails"></a>

```go
func EndpointDetails() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.tags"></a>

```go
func Tags() DataAwsccGroundstationDataflowEndpointGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList">DataAwsccGroundstationDataflowEndpointGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGroundstationDataflowEndpointGroupConfig <a name="DataAwsccGroundstationDataflowEndpointGroupConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/groundstation_dataflow_endpoint_group#id DataAwsccGroundstationDataflowEndpointGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGroundstationDataflowEndpointGroupEndpointDetails <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress {

}
```


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails {

}
```


### DataAwsccGroundstationDataflowEndpointGroupTags <a name="DataAwsccGroundstationDataflowEndpointGroupTags" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

&dataawsccgroundstationdataflowendpointgroup.DataAwsccGroundstationDataflowEndpointGroupTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress">EgressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress">IngressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```go
func AuditResults() *string
```

- *Type:* *string

---

##### `EgressAddress`<sup>Required</sup> <a name="EgressAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress"></a>

```go
func EgressAddress() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a>

---

##### `IngressAddress`<sup>Required</sup> <a name="IngressAddress" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress"></a>

```go
func IngressAddress() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address">Address</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address"></a>

```go
func Address() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a>

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.get"></a>

```go
func Get(index *f64) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint">AwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails">SecurityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetails">DataAwsccGroundstationDataflowEndpointGroupEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="AwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint"></a>

```go
func AwsGroundStationAgentEndpoint() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint"></a>

```go
func Endpoint() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a>

---

##### `SecurityDetails`<sup>Required</sup> <a name="SecurityDetails" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails"></a>

```go
func SecurityDetails() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetails">DataAwsccGroundstationDataflowEndpointGroupEndpointDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---


### DataAwsccGroundstationDataflowEndpointGroupTagsList <a name="DataAwsccGroundstationDataflowEndpointGroupTagsList" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGroundstationDataflowEndpointGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference <a name="DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgroundstationdataflowendpointgroup"

dataawsccgroundstationdataflowendpointgroup.NewDataAwsccGroundstationDataflowEndpointGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTags">DataAwsccGroundstationDataflowEndpointGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGroundstationDataflowEndpointGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationDataflowEndpointGroup.DataAwsccGroundstationDataflowEndpointGroupTags">DataAwsccGroundstationDataflowEndpointGroupTags</a>

---



