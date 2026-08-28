# `dataAwsccPcaconnectoradTemplateGroupAccessControlEntry` Submodule <a name="`dataAwsccPcaconnectoradTemplateGroupAccessControlEntry` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectoradTemplateGroupAccessControlEntry <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntry" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

dataawsccpcaconnectoradtemplategroupaccesscontrolentry.NewDataAwsccPcaconnectoradTemplateGroupAccessControlEntry(scope Construct, id *string, config DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig) DataAwsccPcaconnectoradTemplateGroupAccessControlEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

dataawsccpcaconnectoradtemplategroupaccesscontrolentry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

dataawsccpcaconnectoradtemplategroupaccesscontrolentry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

dataawsccpcaconnectoradtemplategroupaccesscontrolentry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

dataawsccpcaconnectoradtemplategroupaccesscontrolentry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPcaconnectoradTemplateGroupAccessControlEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPcaconnectoradTemplateGroupAccessControlEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectoradTemplateGroupAccessControlEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.accessRights">AccessRights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName">GroupDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier">GroupSecurityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.templateArn">TemplateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessRights`<sup>Required</sup> <a name="AccessRights" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.accessRights"></a>

```go
func AccessRights() DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a>

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName"></a>

```go
func GroupDisplayName() *string
```

- *Type:* *string

---

##### `GroupSecurityIdentifier`<sup>Required</sup> <a name="GroupSecurityIdentifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier"></a>

```go
func GroupSecurityIdentifier() *string
```

- *Type:* *string

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.templateArn"></a>

```go
func TemplateArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

&dataawsccpcaconnectoradtemplategroupaccesscontrolentry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights {

}
```


### DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

&dataawsccpcaconnectoradtemplategroupaccesscontrolentry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry#id DataAwsccPcaconnectoradTemplateGroupAccessControlEntry#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference <a name="DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradtemplategroupaccesscontrolentry"

dataawsccpcaconnectoradtemplategroupaccesscontrolentry.NewDataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll">AutoEnroll</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll">Enroll</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoEnroll`<sup>Required</sup> <a name="AutoEnroll" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll"></a>

```go
func AutoEnroll() *string
```

- *Type:* *string

---

##### `Enroll`<sup>Required</sup> <a name="Enroll" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll"></a>

```go
func Enroll() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplateGroupAccessControlEntry.DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights">DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---



