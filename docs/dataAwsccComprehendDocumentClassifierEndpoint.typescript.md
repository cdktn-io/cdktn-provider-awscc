# `dataAwsccComprehendDocumentClassifierEndpoint` Submodule <a name="`dataAwsccComprehendDocumentClassifierEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendDocumentClassifierEndpoint <a name="DataAwsccComprehendDocumentClassifierEndpoint" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/comprehend_document_classifier_endpoint awscc_comprehend_document_classifier_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint(scope: Construct, id: string, config: DataAwsccComprehendDocumentClassifierEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig">DataAwsccComprehendDocumentClassifierEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig">DataAwsccComprehendDocumentClassifierEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComprehendDocumentClassifierEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComprehendDocumentClassifierEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/comprehend_document_classifier_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendDocumentClassifierEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.currentInferenceUnits">currentInferenceUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList">DataAwsccComprehendDocumentClassifierEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `currentInferenceUnits`<sup>Required</sup> <a name="currentInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.currentInferenceUnits"></a>

```typescript
public readonly currentInferenceUnits: number;
```

- *Type:* number

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits"></a>

```typescript
public readonly desiredInferenceUnits: number;
```

- *Type:* number

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccComprehendDocumentClassifierEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList">DataAwsccComprehendDocumentClassifierEndpointTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendDocumentClassifierEndpointConfig <a name="DataAwsccComprehendDocumentClassifierEndpointConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierEndpointConfig: dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/comprehend_document_classifier_endpoint#id DataAwsccComprehendDocumentClassifierEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendDocumentClassifierEndpointTags <a name="DataAwsccComprehendDocumentClassifierEndpointTags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

const dataAwsccComprehendDocumentClassifierEndpointTags: dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendDocumentClassifierEndpointTagsList <a name="DataAwsccComprehendDocumentClassifierEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference <a name="DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccComprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

new dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags">DataAwsccComprehendDocumentClassifierEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccComprehendDocumentClassifierEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags">DataAwsccComprehendDocumentClassifierEndpointTags</a>

---



