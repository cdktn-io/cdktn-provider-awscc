# `dataAwsccPinpointInAppTemplate` Submodule <a name="`dataAwsccPinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPinpointInAppTemplate <a name="DataAwsccPinpointInAppTemplate" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate(scope: Construct, id: string, config: DataAwsccPinpointInAppTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig">DataAwsccPinpointInAppTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig">DataAwsccPinpointInAppTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPinpointInAppTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig">customConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout">layout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags">tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription">templateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content"></a>

```typescript
public readonly content: DataAwsccPinpointInAppTemplateContentList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a>

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig"></a>

```typescript
public readonly customConfig: string;
```

- *Type:* string

---

##### `layout`<sup>Required</sup> <a name="layout" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout"></a>

```typescript
public readonly layout: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

##### `templateDescription`<sup>Required</sup> <a name="templateDescription" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription"></a>

```typescript
public readonly templateDescription: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPinpointInAppTemplateConfig <a name="DataAwsccPinpointInAppTemplateConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateConfig: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/pinpoint_in_app_template#id DataAwsccPinpointInAppTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPinpointInAppTemplateContent <a name="DataAwsccPinpointInAppTemplateContent" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContent: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent = { ... }
```


### DataAwsccPinpointInAppTemplateContentBodyConfig <a name="DataAwsccPinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentBodyConfig: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig = { ... }
```


### DataAwsccPinpointInAppTemplateContentHeaderConfig <a name="DataAwsccPinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentHeaderConfig: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig = { ... }
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtn <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentPrimaryBtn: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn = { ... }
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid = { ... }
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig = { ... }
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentPrimaryBtnIos: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos = { ... }
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentPrimaryBtnWeb: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb = { ... }
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtn <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentSecondaryBtn: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn = { ... }
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid = { ... }
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig = { ... }
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentSecondaryBtnIos: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos = { ... }
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

const dataAwsccPinpointInAppTemplateContentSecondaryBtnWeb: dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```typescript
public readonly alignment: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentBodyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a>

---


### DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```typescript
public readonly alignment: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentHeaderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a>

---


### DataAwsccPinpointInAppTemplateContentList <a name="DataAwsccPinpointInAppTemplateContentList" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get"></a>

```typescript
public get(index: number): DataAwsccPinpointInAppTemplateContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPinpointInAppTemplateContentOutputReference <a name="DataAwsccPinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig">bodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig">headerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn">primaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn">secondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `bodyConfig`<sup>Required</sup> <a name="bodyConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```typescript
public readonly bodyConfig: DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `headerConfig`<sup>Required</sup> <a name="headerConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```typescript
public readonly headerConfig: DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `primaryBtn`<sup>Required</sup> <a name="primaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```typescript
public readonly primaryBtn: DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `secondaryBtn`<sup>Required</sup> <a name="secondaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```typescript
public readonly secondaryBtn: DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">borderRadius</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `borderRadius`<sup>Required</sup> <a name="borderRadius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```typescript
public readonly borderRadius: number;
```

- *Type:* number

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentPrimaryBtnIos;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```typescript
public readonly android: DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `defaultConfig`<sup>Required</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```typescript
public readonly ios: DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```typescript
public readonly web: DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentPrimaryBtn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">borderRadius</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `borderRadius`<sup>Required</sup> <a name="borderRadius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```typescript
public readonly borderRadius: number;
```

- *Type:* number

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentSecondaryBtnIos;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">defaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```typescript
public readonly android: DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `defaultConfig`<sup>Required</sup> <a name="defaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```typescript
public readonly defaultConfig: DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```typescript
public readonly ios: DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```typescript
public readonly web: DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentSecondaryBtn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```typescript
import { dataAwsccPinpointInAppTemplate } from '@cdktn/provider-awscc'

new dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">buttonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buttonAction`<sup>Required</sup> <a name="buttonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```typescript
public readonly buttonAction: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a>

---



