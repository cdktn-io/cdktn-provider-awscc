# `dataAwsccEcrRepositoryCreationTemplate` Submodule <a name="`dataAwsccEcrRepositoryCreationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcrRepositoryCreationTemplate <a name="DataAwsccEcrRepositoryCreationTemplate" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecr_repository_creation_template awscc_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.NewDataAwsccEcrRepositoryCreationTemplate(scope Construct, id *string, config DataAwsccEcrRepositoryCreationTemplateConfig) DataAwsccEcrRepositoryCreationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig">DataAwsccEcrRepositoryCreationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig">DataAwsccEcrRepositoryCreationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEcrRepositoryCreationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.appliedFor">AppliedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.customRoleArn">CustomRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutability">ImageTagMutability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.repositoryPolicy">RepositoryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList">DataAwsccEcrRepositoryCreationTemplateResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AppliedFor`<sup>Required</sup> <a name="AppliedFor" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.appliedFor"></a>

```go
func AppliedFor() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomRoleArn`<sup>Required</sup> <a name="CustomRoleArn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.customRoleArn"></a>

```go
func CustomRoleArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a>

---

##### `ImageTagMutability`<sup>Required</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```go
func ImageTagMutability() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilters`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters"></a>

```go
func ImageTagMutabilityExclusionFilters() DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a>

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```go
func LifecyclePolicy() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RepositoryPolicy`<sup>Required</sup> <a name="RepositoryPolicy" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```go
func RepositoryPolicy() *string
```

- *Type:* *string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.resourceTags"></a>

```go
func ResourceTags() DataAwsccEcrRepositoryCreationTemplateResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList">DataAwsccEcrRepositoryCreationTemplateResourceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcrRepositoryCreationTemplateConfig <a name="DataAwsccEcrRepositoryCreationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

&dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecr_repository_creation_template#id DataAwsccEcrRepositoryCreationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration <a name="DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

&dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration {

}
```


### DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters <a name="DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

&dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters {

}
```


### DataAwsccEcrRepositoryCreationTemplateResourceTags <a name="DataAwsccEcrRepositoryCreationTemplateResourceTags" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

&dataawsccecrrepositorycreationtemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.NewDataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration</a>

---


### DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList <a name="DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.NewDataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get"></a>

```go
func Get(index *f64) DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference <a name="DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.NewDataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```go
func ImageTagMutabilityExclusionFilterType() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```go
func ImageTagMutabilityExclusionFilterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>

---


### DataAwsccEcrRepositoryCreationTemplateResourceTagsList <a name="DataAwsccEcrRepositoryCreationTemplateResourceTagsList" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.NewDataAwsccEcrRepositoryCreationTemplateResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcrRepositoryCreationTemplateResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference <a name="DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecrrepositorycreationtemplate"

dataawsccecrrepositorycreationtemplate.NewDataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags">DataAwsccEcrRepositoryCreationTemplateResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcrRepositoryCreationTemplateResourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags">DataAwsccEcrRepositoryCreationTemplateResourceTags</a>

---



