# `dataAwsccGameliftContainerGroupDefinition` Submodule <a name="`dataAwsccGameliftContainerGroupDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftContainerGroupDefinition <a name="DataAwsccGameliftContainerGroupDefinition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_container_group_definition awscc_gamelift_container_group_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinition(scope Construct, id *string, config DataAwsccGameliftContainerGroupDefinitionConfig) DataAwsccGameliftContainerGroupDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig">DataAwsccGameliftContainerGroupDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig">DataAwsccGameliftContainerGroupDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGameliftContainerGroupDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGameliftContainerGroupDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_container_group_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftContainerGroupDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupDefinitionArn">ContainerGroupDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupType">ContainerGroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.gameServerContainerDefinition">GameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.sourceVersionNumber">SourceVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.supportContainerDefinitions">SupportContainerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList">DataAwsccGameliftContainerGroupDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes">TotalMemoryLimitMebibytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalVcpuLimit">TotalVcpuLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ContainerGroupDefinitionArn`<sup>Required</sup> <a name="ContainerGroupDefinitionArn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupDefinitionArn"></a>

```go
func ContainerGroupDefinitionArn() *string
```

- *Type:* *string

---

##### `ContainerGroupType`<sup>Required</sup> <a name="ContainerGroupType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupType"></a>

```go
func ContainerGroupType() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `GameServerContainerDefinition`<sup>Required</sup> <a name="GameServerContainerDefinition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.gameServerContainerDefinition"></a>

```go
func GameServerContainerDefinition() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `SourceVersionNumber`<sup>Required</sup> <a name="SourceVersionNumber" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.sourceVersionNumber"></a>

```go
func SourceVersionNumber() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `SupportContainerDefinitions`<sup>Required</sup> <a name="SupportContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.supportContainerDefinitions"></a>

```go
func SupportContainerDefinitions() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tags"></a>

```go
func Tags() DataAwsccGameliftContainerGroupDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList">DataAwsccGameliftContainerGroupDefinitionTagsList</a>

---

##### `TotalMemoryLimitMebibytes`<sup>Required</sup> <a name="TotalMemoryLimitMebibytes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes"></a>

```go
func TotalMemoryLimitMebibytes() *f64
```

- *Type:* *f64

---

##### `TotalVcpuLimit`<sup>Required</sup> <a name="TotalVcpuLimit" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalVcpuLimit"></a>

```go
func TotalVcpuLimit() *f64
```

- *Type:* *f64

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftContainerGroupDefinitionConfig <a name="DataAwsccGameliftContainerGroupDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/gamelift_container_group_definition#id DataAwsccGameliftContainerGroupDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition {

}
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn {

}
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride {

}
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities {

}
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints {

}
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration {

}
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration {

}
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges {

}
```


### DataAwsccGameliftContainerGroupDefinitionTags <a name="DataAwsccGameliftContainerGroupDefinitionTags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

&dataawsccgameliftcontainergroupdefinition.DataAwsccGameliftContainerGroupDefinitionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath">InstancePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `InstancePath`<sup>Required</sup> <a name="InstancePath" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath"></a>

```go
func InstancePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn">DependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride">EnvironmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities">LinuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints">MountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration">PortConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest">ResolvedImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion">ServerSdkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn"></a>

```go
func DependsOn() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a>

---

##### `EnvironmentOverride`<sup>Required</sup> <a name="EnvironmentOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride"></a>

```go
func EnvironmentOverride() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a>

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `LinuxCapabilities`<sup>Required</sup> <a name="LinuxCapabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities"></a>

```go
func LinuxCapabilities() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a>

---

##### `MountPoints`<sup>Required</sup> <a name="MountPoints" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints"></a>

```go
func MountPoints() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a>

---

##### `PortConfiguration`<sup>Required</sup> <a name="PortConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration"></a>

```go
func PortConfiguration() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a>

---

##### `ResolvedImageDigest`<sup>Required</sup> <a name="ResolvedImageDigest" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest"></a>

```go
func ResolvedImageDigest() *string
```

- *Type:* *string

---

##### `ServerSdkVersion`<sup>Required</sup> <a name="ServerSdkVersion" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion"></a>

```go
func ServerSdkVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges">ContainerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortRanges`<sup>Required</sup> <a name="ContainerPortRanges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges"></a>

```go
func ContainerPortRanges() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod">StartPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `StartPeriod`<sup>Required</sup> <a name="StartPeriod" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```go
func StartPeriod() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath">InstancePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `InstancePath`<sup>Required</sup> <a name="InstancePath" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath"></a>

```go
func InstancePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn">DependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride">EnvironmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential">Essential</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities">LinuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes">MemoryHardLimitMebibytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints">MountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration">PortConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest">ResolvedImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu">Vcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn"></a>

```go
func DependsOn() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a>

---

##### `EnvironmentOverride`<sup>Required</sup> <a name="EnvironmentOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride"></a>

```go
func EnvironmentOverride() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a>

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential"></a>

```go
func Essential() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck"></a>

```go
func HealthCheck() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a>

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `LinuxCapabilities`<sup>Required</sup> <a name="LinuxCapabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities"></a>

```go
func LinuxCapabilities() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a>

---

##### `MemoryHardLimitMebibytes`<sup>Required</sup> <a name="MemoryHardLimitMebibytes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes"></a>

```go
func MemoryHardLimitMebibytes() *f64
```

- *Type:* *f64

---

##### `MountPoints`<sup>Required</sup> <a name="MountPoints" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints"></a>

```go
func MountPoints() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a>

---

##### `PortConfiguration`<sup>Required</sup> <a name="PortConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration"></a>

```go
func PortConfiguration() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a>

---

##### `ResolvedImageDigest`<sup>Required</sup> <a name="ResolvedImageDigest" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest"></a>

```go
func ResolvedImageDigest() *string
```

- *Type:* *string

---

##### `Vcpu`<sup>Required</sup> <a name="Vcpu" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu"></a>

```go
func Vcpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges">ContainerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortRanges`<sup>Required</sup> <a name="ContainerPortRanges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges"></a>

```go
func ContainerPortRanges() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---


### DataAwsccGameliftContainerGroupDefinitionTagsList <a name="DataAwsccGameliftContainerGroupDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGameliftContainerGroupDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGameliftContainerGroupDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGameliftContainerGroupDefinitionTagsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgameliftcontainergroupdefinition"

dataawsccgameliftcontainergroupdefinition.NewDataAwsccGameliftContainerGroupDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGameliftContainerGroupDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags">DataAwsccGameliftContainerGroupDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGameliftContainerGroupDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags">DataAwsccGameliftContainerGroupDefinitionTags</a>

---



