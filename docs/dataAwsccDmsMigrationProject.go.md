# `dataAwsccDmsMigrationProject` Submodule <a name="`dataAwsccDmsMigrationProject` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsMigrationProject <a name="DataAwsccDmsMigrationProject" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_migration_project awscc_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProject(scope Construct, id *string, config DataAwsccDmsMigrationProjectConfig) DataAwsccDmsMigrationProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig">DataAwsccDmsMigrationProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig">DataAwsccDmsMigrationProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.DataAwsccDmsMigrationProject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.DataAwsccDmsMigrationProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.DataAwsccDmsMigrationProject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.DataAwsccDmsMigrationProject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDmsMigrationProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileIdentifier">InstanceProfileIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileName">InstanceProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectArn">MigrationProjectArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectCreationTime">MigrationProjectCreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectIdentifier">MigrationProjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectName">MigrationProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.schemaConversionApplicationAttributes">SchemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.sourceDataProviderDescriptors">SourceDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList">DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList">DataAwsccDmsMigrationProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.targetDataProviderDescriptors">TargetDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList">DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.transformationRules">TransformationRules</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `InstanceProfileIdentifier`<sup>Required</sup> <a name="InstanceProfileIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileIdentifier"></a>

```go
func InstanceProfileIdentifier() *string
```

- *Type:* *string

---

##### `InstanceProfileName`<sup>Required</sup> <a name="InstanceProfileName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileName"></a>

```go
func InstanceProfileName() *string
```

- *Type:* *string

---

##### `MigrationProjectArn`<sup>Required</sup> <a name="MigrationProjectArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectArn"></a>

```go
func MigrationProjectArn() *string
```

- *Type:* *string

---

##### `MigrationProjectCreationTime`<sup>Required</sup> <a name="MigrationProjectCreationTime" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectCreationTime"></a>

```go
func MigrationProjectCreationTime() *string
```

- *Type:* *string

---

##### `MigrationProjectIdentifier`<sup>Required</sup> <a name="MigrationProjectIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectIdentifier"></a>

```go
func MigrationProjectIdentifier() *string
```

- *Type:* *string

---

##### `MigrationProjectName`<sup>Required</sup> <a name="MigrationProjectName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectName"></a>

```go
func MigrationProjectName() *string
```

- *Type:* *string

---

##### `SchemaConversionApplicationAttributes`<sup>Required</sup> <a name="SchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```go
func SchemaConversionApplicationAttributes() DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a>

---

##### `SourceDataProviderDescriptors`<sup>Required</sup> <a name="SourceDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.sourceDataProviderDescriptors"></a>

```go
func SourceDataProviderDescriptors() DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList">DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tags"></a>

```go
func Tags() DataAwsccDmsMigrationProjectTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList">DataAwsccDmsMigrationProjectTagsList</a>

---

##### `TargetDataProviderDescriptors`<sup>Required</sup> <a name="TargetDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.targetDataProviderDescriptors"></a>

```go
func TargetDataProviderDescriptors() DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList">DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList</a>

---

##### `TransformationRules`<sup>Required</sup> <a name="TransformationRules" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.transformationRules"></a>

```go
func TransformationRules() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsMigrationProjectConfig <a name="DataAwsccDmsMigrationProjectConfig" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

&dataawsccdmsmigrationproject.DataAwsccDmsMigrationProjectConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_migration_project#id DataAwsccDmsMigrationProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes <a name="DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

&dataawsccdmsmigrationproject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes {

}
```


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptors <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

&dataawsccdmsmigrationproject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors {

}
```


### DataAwsccDmsMigrationProjectTags <a name="DataAwsccDmsMigrationProjectTags" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

&dataawsccdmsmigrationproject.DataAwsccDmsMigrationProjectTags {

}
```


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptors <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

&dataawsccdmsmigrationproject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">S3BucketPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">S3BucketRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketPath`<sup>Required</sup> <a name="S3BucketPath" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```go
func S3BucketPath() *string
```

- *Type:* *string

---

##### `S3BucketRoleArn`<sup>Required</sup> <a name="S3BucketRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```go
func S3BucketRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get"></a>

```go
func Get(index *f64) DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn">DataProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">DataProviderIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName">DataProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors">DataAwsccDmsMigrationProjectSourceDataProviderDescriptors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataProviderArn`<sup>Required</sup> <a name="DataProviderArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```go
func DataProviderArn() *string
```

- *Type:* *string

---

##### `DataProviderIdentifier`<sup>Required</sup> <a name="DataProviderIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```go
func DataProviderIdentifier() *string
```

- *Type:* *string

---

##### `DataProviderName`<sup>Required</sup> <a name="DataProviderName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```go
func DataProviderName() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsMigrationProjectSourceDataProviderDescriptors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors">DataAwsccDmsMigrationProjectSourceDataProviderDescriptors</a>

---


### DataAwsccDmsMigrationProjectTagsList <a name="DataAwsccDmsMigrationProjectTagsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProjectTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDmsMigrationProjectTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDmsMigrationProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDmsMigrationProjectTagsOutputReference <a name="DataAwsccDmsMigrationProjectTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProjectTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDmsMigrationProjectTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags">DataAwsccDmsMigrationProjectTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsMigrationProjectTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags">DataAwsccDmsMigrationProjectTags</a>

---


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get"></a>

```go
func Get(index *f64) DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsmigrationproject"

dataawsccdmsmigrationproject.NewDataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn">DataProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">DataProviderIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName">DataProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors">DataAwsccDmsMigrationProjectTargetDataProviderDescriptors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataProviderArn`<sup>Required</sup> <a name="DataProviderArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```go
func DataProviderArn() *string
```

- *Type:* *string

---

##### `DataProviderIdentifier`<sup>Required</sup> <a name="DataProviderIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```go
func DataProviderIdentifier() *string
```

- *Type:* *string

---

##### `DataProviderName`<sup>Required</sup> <a name="DataProviderName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```go
func DataProviderName() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsMigrationProjectTargetDataProviderDescriptors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors">DataAwsccDmsMigrationProjectTargetDataProviderDescriptors</a>

---



