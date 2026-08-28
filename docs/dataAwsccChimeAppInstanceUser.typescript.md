# `dataAwsccChimeAppInstanceUser` Submodule <a name="`dataAwsccChimeAppInstanceUser` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeAppInstanceUser <a name="DataAwsccChimeAppInstanceUser" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_user awscc_chime_app_instance_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser(scope: Construct, id: string, config: DataAwsccChimeAppInstanceUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig">DataAwsccChimeAppInstanceUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig">DataAwsccChimeAppInstanceUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChimeAppInstanceUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isConstruct"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformElement"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformDataSource"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.generateConfigForImport"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccChimeAppInstanceUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChimeAppInstanceUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChimeAppInstanceUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeAppInstanceUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.appInstanceUserArn">appInstanceUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.appInstanceUserId">appInstanceUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference">DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList">DataAwsccChimeAppInstanceUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

---

##### `appInstanceUserArn`<sup>Required</sup> <a name="appInstanceUserArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.appInstanceUserArn"></a>

```typescript
public readonly appInstanceUserArn: string;
```

- *Type:* string

---

##### `appInstanceUserId`<sup>Required</sup> <a name="appInstanceUserId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.appInstanceUserId"></a>

```typescript
public readonly appInstanceUserId: string;
```

- *Type:* string

---

##### `expirationSettings`<sup>Required</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.expirationSettings"></a>

```typescript
public readonly expirationSettings: DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference">DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.tags"></a>

```typescript
public readonly tags: DataAwsccChimeAppInstanceUserTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList">DataAwsccChimeAppInstanceUserTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeAppInstanceUserConfig <a name="DataAwsccChimeAppInstanceUserConfig" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceUserConfig: dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_user#id DataAwsccChimeAppInstanceUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeAppInstanceUserExpirationSettings <a name="DataAwsccChimeAppInstanceUserExpirationSettings" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettings.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceUserExpirationSettings: dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettings = { ... }
```


### DataAwsccChimeAppInstanceUserTags <a name="DataAwsccChimeAppInstanceUserTags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTags.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceUserTags: dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference <a name="DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterion">expirationCriterion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDays">expirationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettings">DataAwsccChimeAppInstanceUserExpirationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationCriterion`<sup>Required</sup> <a name="expirationCriterion" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterion"></a>

```typescript
public readonly expirationCriterion: string;
```

- *Type:* string

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDays"></a>

```typescript
public readonly expirationDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeAppInstanceUserExpirationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserExpirationSettings">DataAwsccChimeAppInstanceUserExpirationSettings</a>

---


### DataAwsccChimeAppInstanceUserTagsList <a name="DataAwsccChimeAppInstanceUserTagsList" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.get"></a>

```typescript
public get(index: number): DataAwsccChimeAppInstanceUserTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChimeAppInstanceUserTagsOutputReference <a name="DataAwsccChimeAppInstanceUserTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceUser } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTags">DataAwsccChimeAppInstanceUserTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeAppInstanceUserTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceUser.DataAwsccChimeAppInstanceUserTags">DataAwsccChimeAppInstanceUserTags</a>

---



