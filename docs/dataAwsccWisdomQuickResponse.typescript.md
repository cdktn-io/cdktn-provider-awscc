# `dataAwsccWisdomQuickResponse` Submodule <a name="`dataAwsccWisdomQuickResponse` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomQuickResponse <a name="DataAwsccWisdomQuickResponse" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wisdom_quick_response awscc_wisdom_quick_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse(scope: Construct, id: string, config: DataAwsccWisdomQuickResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig">DataAwsccWisdomQuickResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig">DataAwsccWisdomQuickResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWisdomQuickResponse resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isConstruct"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformElement"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformDataSource"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccWisdomQuickResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWisdomQuickResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWisdomQuickResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wisdom_quick_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomQuickResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.channels">channels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference">DataAwsccWisdomQuickResponseContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference">DataAwsccWisdomQuickResponseContentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference">DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.isActive">isActive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseArn">quickResponseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseId">quickResponseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.shortcutKey">shortcutKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList">DataAwsccWisdomQuickResponseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.content"></a>

```typescript
public readonly content: DataAwsccWisdomQuickResponseContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference">DataAwsccWisdomQuickResponseContentOutputReference</a>

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contents"></a>

```typescript
public readonly contents: DataAwsccWisdomQuickResponseContentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference">DataAwsccWisdomQuickResponseContentsOutputReference</a>

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupingConfiguration`<sup>Required</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.groupingConfiguration"></a>

```typescript
public readonly groupingConfiguration: DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference">DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference</a>

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quickResponseArn`<sup>Required</sup> <a name="quickResponseArn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseArn"></a>

```typescript
public readonly quickResponseArn: string;
```

- *Type:* string

---

##### `quickResponseId`<sup>Required</sup> <a name="quickResponseId" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseId"></a>

```typescript
public readonly quickResponseId: string;
```

- *Type:* string

---

##### `shortcutKey`<sup>Required</sup> <a name="shortcutKey" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.shortcutKey"></a>

```typescript
public readonly shortcutKey: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tags"></a>

```typescript
public readonly tags: DataAwsccWisdomQuickResponseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList">DataAwsccWisdomQuickResponseTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomQuickResponseConfig <a name="DataAwsccWisdomQuickResponseConfig" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

const dataAwsccWisdomQuickResponseConfig: dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wisdom_quick_response#id DataAwsccWisdomQuickResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWisdomQuickResponseContent <a name="DataAwsccWisdomQuickResponseContent" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

const dataAwsccWisdomQuickResponseContent: dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent = { ... }
```


### DataAwsccWisdomQuickResponseContents <a name="DataAwsccWisdomQuickResponseContents" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

const dataAwsccWisdomQuickResponseContents: dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents = { ... }
```


### DataAwsccWisdomQuickResponseContentsMarkdown <a name="DataAwsccWisdomQuickResponseContentsMarkdown" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

const dataAwsccWisdomQuickResponseContentsMarkdown: dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown = { ... }
```


### DataAwsccWisdomQuickResponseContentsPlainText <a name="DataAwsccWisdomQuickResponseContentsPlainText" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

const dataAwsccWisdomQuickResponseContentsPlainText: dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText = { ... }
```


### DataAwsccWisdomQuickResponseGroupingConfiguration <a name="DataAwsccWisdomQuickResponseGroupingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

const dataAwsccWisdomQuickResponseGroupingConfiguration: dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration = { ... }
```


### DataAwsccWisdomQuickResponseTags <a name="DataAwsccWisdomQuickResponseTags" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

const dataAwsccWisdomQuickResponseTags: dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWisdomQuickResponseContentOutputReference <a name="DataAwsccWisdomQuickResponseContentOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent">DataAwsccWisdomQuickResponseContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomQuickResponseContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent">DataAwsccWisdomQuickResponseContent</a>

---


### DataAwsccWisdomQuickResponseContentsMarkdownOutputReference <a name="DataAwsccWisdomQuickResponseContentsMarkdownOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown">DataAwsccWisdomQuickResponseContentsMarkdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomQuickResponseContentsMarkdown;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown">DataAwsccWisdomQuickResponseContentsMarkdown</a>

---


### DataAwsccWisdomQuickResponseContentsOutputReference <a name="DataAwsccWisdomQuickResponseContentsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.markdown">markdown</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference">DataAwsccWisdomQuickResponseContentsMarkdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.plainText">plainText</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference">DataAwsccWisdomQuickResponseContentsPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents">DataAwsccWisdomQuickResponseContents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `markdown`<sup>Required</sup> <a name="markdown" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.markdown"></a>

```typescript
public readonly markdown: DataAwsccWisdomQuickResponseContentsMarkdownOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference">DataAwsccWisdomQuickResponseContentsMarkdownOutputReference</a>

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.plainText"></a>

```typescript
public readonly plainText: DataAwsccWisdomQuickResponseContentsPlainTextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference">DataAwsccWisdomQuickResponseContentsPlainTextOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomQuickResponseContents;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents">DataAwsccWisdomQuickResponseContents</a>

---


### DataAwsccWisdomQuickResponseContentsPlainTextOutputReference <a name="DataAwsccWisdomQuickResponseContentsPlainTextOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText">DataAwsccWisdomQuickResponseContentsPlainText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomQuickResponseContentsPlainText;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText">DataAwsccWisdomQuickResponseContentsPlainText</a>

---


### DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference <a name="DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.criteria">criteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration">DataAwsccWisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.criteria"></a>

```typescript
public readonly criteria: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomQuickResponseGroupingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration">DataAwsccWisdomQuickResponseGroupingConfiguration</a>

---


### DataAwsccWisdomQuickResponseTagsList <a name="DataAwsccWisdomQuickResponseTagsList" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.get"></a>

```typescript
public get(index: number): DataAwsccWisdomQuickResponseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccWisdomQuickResponseTagsOutputReference <a name="DataAwsccWisdomQuickResponseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccWisdomQuickResponse } from '@cdktn/provider-awscc'

new dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags">DataAwsccWisdomQuickResponseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccWisdomQuickResponseTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags">DataAwsccWisdomQuickResponseTags</a>

---



