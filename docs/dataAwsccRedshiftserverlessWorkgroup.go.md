# `dataAwsccRedshiftserverlessWorkgroup` Submodule <a name="`dataAwsccRedshiftserverlessWorkgroup` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftserverlessWorkgroup <a name="DataAwsccRedshiftserverlessWorkgroup" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroup(scope Construct, id *string, config DataAwsccRedshiftserverlessWorkgroupConfig) DataAwsccRedshiftserverlessWorkgroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig">DataAwsccRedshiftserverlessWorkgroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig">DataAwsccRedshiftserverlessWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRedshiftserverlessWorkgroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.baseCapacity">BaseCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.configParameters">ConfigParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.recoveryPointId">RecoveryPointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotOwnerAccount">SnapshotOwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList">DataAwsccRedshiftserverlessWorkgroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.trackName">TrackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroup">Workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.baseCapacity"></a>

```go
func BaseCapacity() *f64
```

- *Type:* *f64

---

##### `ConfigParameters`<sup>Required</sup> <a name="ConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.configParameters"></a>

```go
func ConfigParameters() DataAwsccRedshiftserverlessWorkgroupConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupConfigParametersList</a>

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```go
func EnhancedVpcRouting() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PricePerformanceTarget`<sup>Required</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.pricePerformanceTarget"></a>

```go
func PricePerformanceTarget() DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecoveryPointId`<sup>Required</sup> <a name="RecoveryPointId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.recoveryPointId"></a>

```go
func RecoveryPointId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotArn"></a>

```go
func SnapshotArn() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotOwnerAccount`<sup>Required</sup> <a name="SnapshotOwnerAccount" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotOwnerAccount"></a>

```go
func SnapshotOwnerAccount() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tags"></a>

```go
func Tags() DataAwsccRedshiftserverlessWorkgroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList">DataAwsccRedshiftserverlessWorkgroupTagsList</a>

---

##### `TrackName`<sup>Required</sup> <a name="TrackName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.trackName"></a>

```go
func TrackName() *string
```

- *Type:* *string

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroup"></a>

```go
func Workgroup() DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference</a>

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftserverlessWorkgroupConfig <a name="DataAwsccRedshiftserverlessWorkgroupConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsccRedshiftserverlessWorkgroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftserverlessWorkgroupConfigParameters <a name="DataAwsccRedshiftserverlessWorkgroupConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters {

}
```


### DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget <a name="DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget {

}
```


### DataAwsccRedshiftserverlessWorkgroupTags <a name="DataAwsccRedshiftserverlessWorkgroupTags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupTags {

}
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroup <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroup" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup {

}
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters {

}
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint {

}
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints {

}
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces {

}
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

&dataawsccredshiftserverlessworkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftserverlessWorkgroupConfigParametersList <a name="DataAwsccRedshiftserverlessWorkgroupConfigParametersList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupConfigParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftserverlessWorkgroupConfigParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey">ParameterKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```go
func ParameterKey() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupConfigParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupConfigParameters</a>

---


### DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget</a>

---


### DataAwsccRedshiftserverlessWorkgroupTagsList <a name="DataAwsccRedshiftserverlessWorkgroupTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftserverlessWorkgroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftserverlessWorkgroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftserverlessWorkgroupTagsOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftserverlessWorkgroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags">DataAwsccRedshiftserverlessWorkgroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags">DataAwsccRedshiftserverlessWorkgroupTags</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey">ParameterKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```go
func ParameterKey() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VpcEndpoints`<sup>Required</sup> <a name="VpcEndpoints" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints"></a>

```go
func VpcEndpoints() DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity">BaseCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters">ConfigParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName">TrackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn">WorkgroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId">WorkgroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup">DataAwsccRedshiftserverlessWorkgroupWorkgroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity"></a>

```go
func BaseCapacity() *f64
```

- *Type:* *f64

---

##### `ConfigParameters`<sup>Required</sup> <a name="ConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters"></a>

```go
func ConfigParameters() DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint"></a>

```go
func Endpoint() DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a>

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting"></a>

```go
func EnhancedVpcRouting() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `PricePerformanceTarget`<sup>Required</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget"></a>

```go
func PricePerformanceTarget() DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TrackName`<sup>Required</sup> <a name="TrackName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName"></a>

```go
func TrackName() *string
```

- *Type:* *string

---

##### `WorkgroupArn`<sup>Required</sup> <a name="WorkgroupArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn"></a>

```go
func WorkgroupArn() *string
```

- *Type:* *string

---

##### `WorkgroupId`<sup>Required</sup> <a name="WorkgroupId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId"></a>

```go
func WorkgroupId() *string
```

- *Type:* *string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupWorkgroup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup">DataAwsccRedshiftserverlessWorkgroupWorkgroup</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessworkgroup"

dataawsccredshiftserverlessworkgroup.NewDataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---



