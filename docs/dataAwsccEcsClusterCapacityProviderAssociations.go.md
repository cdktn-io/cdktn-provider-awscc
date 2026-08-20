# `dataAwsccEcsClusterCapacityProviderAssociations` Submodule <a name="`dataAwsccEcsClusterCapacityProviderAssociations` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsClusterCapacityProviderAssociations <a name="DataAwsccEcsClusterCapacityProviderAssociations" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ecs_cluster_capacity_provider_associations awscc_ecs_cluster_capacity_provider_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

dataawsccecsclustercapacityproviderassociations.NewDataAwsccEcsClusterCapacityProviderAssociations(scope Construct, id *string, config DataAwsccEcsClusterCapacityProviderAssociationsConfig) DataAwsccEcsClusterCapacityProviderAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig">DataAwsccEcsClusterCapacityProviderAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig">DataAwsccEcsClusterCapacityProviderAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

dataawsccecsclustercapacityproviderassociations.DataAwsccEcsClusterCapacityProviderAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

dataawsccecsclustercapacityproviderassociations.DataAwsccEcsClusterCapacityProviderAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

dataawsccecsclustercapacityproviderassociations.DataAwsccEcsClusterCapacityProviderAssociations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

dataawsccecsclustercapacityproviderassociations.DataAwsccEcsClusterCapacityProviderAssociations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEcsClusterCapacityProviderAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEcsClusterCapacityProviderAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ecs_cluster_capacity_provider_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsClusterCapacityProviderAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.capacityProviders">CapacityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CapacityProviders`<sup>Required</sup> <a name="CapacityProviders" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.capacityProviders"></a>

```go
func CapacityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy"></a>

```go
func DefaultCapacityProviderStrategy() DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsClusterCapacityProviderAssociationsConfig <a name="DataAwsccEcsClusterCapacityProviderAssociationsConfig" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

&dataawsccecsclustercapacityproviderassociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ecs_cluster_capacity_provider_associations#id DataAwsccEcsClusterCapacityProviderAssociations#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy <a name="DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

&dataawsccecsclustercapacityproviderassociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList <a name="DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

dataawsccecsclustercapacityproviderassociations.NewDataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get"></a>

```go
func Get(index *f64) DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference <a name="DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsclustercapacityproviderassociations"

dataawsccecsclustercapacityproviderassociations.NewDataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```go
func Base() *f64
```

- *Type:* *f64

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```go
func CapacityProvider() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>

---



